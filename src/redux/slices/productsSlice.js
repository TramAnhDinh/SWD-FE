import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://localhost:7163/api/Product";
// const API_URL = "https://phamdangtuc-001-site1.ntempurl.com/api/Product";

// Lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm!");

    const data = await response.json();
    console.log("API Product Response:", data);

    // Lọc sản phẩm chưa bị xóa (isDeleted: false)
    const products = Array.isArray(data?.data) ? data.data : data?.data?.$values || [];
    const filteredProducts = products.filter((product) => !product.isDeleted);

    return filteredProducts;
  } catch (error) {
    console.error("Lỗi fetchProducts:", error);
    return rejectWithValue(error.message);
  }
});


// Xóa sản phẩm
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Lỗi khi xóa sản phẩm!");

      console.log(`✅ Sản phẩm ${productId} đã bị xóa.`);
      return productId;
    } catch (error) {
      console.error("Lỗi deleteProduct:", error);
      return rejectWithValue(error.message);
    }
  }
);


// Thêm sản phẩm
export const addProduct = createAsyncThunk("products/addProduct", async (product, { dispatch, rejectWithValue }) => {
  try {
    if (!product.categoryId) return rejectWithValue("Danh mục sản phẩm là bắt buộc!");

    const newProductData = {
      productId: Number(product.productId),  // Chuyển thành số nguyên
      productName: product.productName,
      price: Number(product.price),  // Đảm bảo giá là số
      stockInStorage: Number(product.stockInStorage),  // Đảm bảo số lượng tồn kho là số
      image: product.image,
      categoryId: Number(product.categoryId),  // Đảm bảo category là số
      description: product.description || "",
      isDeleted: Boolean(product.isDeleted),
    };

    console.log("Dữ liệu gửi lên API:", newProductData);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Lỗi khi thêm sản phẩm");
    }

    const newProduct = await response.json();
    console.log("Sản phẩm đã thêm:", newProduct);

    dispatch(fetchProducts()); // Load lại danh sách sản phẩm
    return newProduct;
  } catch (error) {
    console.error("Lỗi addProduct:", error.message);
    return rejectWithValue(error.message);
  }
});

// Cập nhật sản phẩm

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, { dispatch, rejectWithValue }) => {
    try {
      const updatedData = {
        productId: Number(product.productId),  // Chuyển thành số nguyên
        productName: product.productName,
        price: Number(product.price),  // Đảm bảo giá là số
        stockInStorage: Number(product.stockInStorage),  // Đảm bảo số lượng tồn kho là số
        image: product.image,
        categoryId: Number(product.categoryId),  // Đảm bảo category là số
        description: product.description || "",
        isDeleted: Boolean(product.isDeleted),  // Chuyển boolean thành số
      };

      console.log("Dữ liệu gửi lên API:", updatedData);

      const response = await fetch(`${API_URL}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Lỗi khi cập nhật sản phẩm!");

      const updatedProduct = await response.json();
      console.log("Sản phẩm đã cập nhật:", updatedProduct);

      dispatch(fetchProducts());
      return updatedProduct;
    } catch (error) {
      console.error("Lỗi updateProduct:", error);
      return rejectWithValue(error.message);
    }
  }
);


// Redux Slice
const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load danh sách sản phẩm
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Thêm sản phẩm mới
      .addCase(addProduct.fulfilled, (state, action) => {

        if (action.payload) {
    state.items.push(action.payload);
  } else {
    console.warn("Sản phẩm trả về không hợp lệ:", action.payload);
  }
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.payload || "Lỗi khi thêm sản phẩm";
      })
      

      // Xóa sản phẩm
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.productId !== action.payload);
      })

      // Cập nhật sản phẩm
      .addCase(updateProduct.fulfilled, (state, action) => {
        console.log("Dữ liệu trả về từ API:", action.payload);
        const index = state.items.findIndex((item) => item.productId === action.payload.productId);
        if (index !== -1) {
          state.items[index] = action.payload;
        } else {
          console.warn("Không tìm thấy sản phẩm cần cập nhật!");
        }
      })

      // Trạng thái chung
      .addMatcher((action) => action.type.endsWith("/pending"), (state) => {
        state.status = "loading";
      })
      .addMatcher((action) => action.type.endsWith("/rejected"), (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
