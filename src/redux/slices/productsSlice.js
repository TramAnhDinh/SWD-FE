// import { createSlice } from '@reduxjs/toolkit';

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: [
//     { id: 1, name: 'T-Shirt', price: 400, image: '/assets/t-shirt.jpg', description: 'Cool T-Shirt' },
//     { id: 2, name: 'Hoodie', price: 300, image: '/assets/hoodie.jpg', description: 'Warm Hoodie' },
//     { id: 3, name: 'Jacket', price: 500, image: '/assets/jacket.jpg', description: 'Color Jacket' },
//     { id: 4, name: 'Cap', price: 100, image: '/assets/cap.jpg', description: 'Warm Cap' },
//     { id: 5, name: 'Jeans', price: 150, image: '/assets/jean.jpg', description: 'Style Jean' },
// ],
//   reducers: {},
// });

// // eslint-disable-next-line no-empty-pattern
// export const {} = productsSlice.actions;
// export default productsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: 1, name: "T-Shirt", price: 400, image: "/assets/t-shirt.jpg", description: "Cool T-Shirt" },
//   { id: 2, name: "Hoodie", price: 300, image: "/assets/hoodie.jpg", description: "Warm Hoodie" },
//   { id: 3, name: "Jacket", price: 500, image: "/assets/jacket.jpg", description: "Color Jacket" },
//   { id: 4, name: "Cap", price: 100, image: "/assets/cap.jpg", description: "Warm Cap" },
//   { id: 5, name: "Jeans", price: 150, image: "/assets/jean.jpg", description: "Style Jean" },
// ];

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       state.push(action.payload);
//     },
//     updateProduct: (state, action) => {
//       const index = state.findIndex((p) => p.id === action.payload.id);
//       if (index !== -1) {
//         state[index] = action.payload;
//       }
//     },
//     deleteProduct: (state, action) => {
//       return state.filter((p) => p.id !== action.payload);
//     },
//   },
// });

// export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
// export default productsSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Action để gọi API lấy danh sách sản phẩm
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   const response = await fetch("https://localhost:7163/api/Product");
//   return response.json();
// });

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     items: [],
//     status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.items.push(action.payload);
//     },
//     updateProduct: (state, action) => {
//       const index = state.items.findIndex((p) => p.id === action.payload.id);
//       if (index !== -1) {
//         state.items[index] = action.payload;
//       }
//     },
//     deleteProduct: (state, action) => {
//       state.items = state.items.filter((p) => p.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
// export default productsSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Fetch dữ liệu từ API
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   const response = await fetch("https://localhost:7163/api/Product");
//   const data = await response.json();
//   console.log("API response:", data); // Debug dữ liệu từ API
//   return data;
// });

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     items: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         console.log("Fetched Products:", action.payload); // Debug Redux
//         state.status = "succeeded";
//         state.items = action.payload; // Cập nhật state với dữ liệu API trả về
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default productsSlice.reducer;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Fetch dữ liệu từ API
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   const response = await fetch("https://localhost:7163/api/Product");
//   const data = await response.json();
//   return data;
// });

// // Xóa sản phẩm
// export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId) => {
//   await fetch(`https://localhost:7163/api/Product/${productId}`, {
//     method: "DELETE",
//   });
//   return productId;
// });


// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     items: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       // Xử lý xóa sản phẩm
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.items = state.items.filter((product) => product.id !== action.payload);
//         console.log("Redux state items:", state.items);

//       });
//   },
// });


// export default productsSlice.reducer; // Chỉ export reducer mặc định
// // export {deleteProduct} // Chỉ export `deleteProduct` một lần

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch dữ liệu từ API
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   const response = await fetch("https://localhost:7163/api/Product");
//   const data = await response.json();
//   return data?.data?.$values ?? []; // Kiểm tra dữ liệu
// });

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://localhost:7163/api/Product");
  const data = await response.json();

  console.log("API Product Response:", data);
  return data;
  // return data?.data?.$values ?? []; // Kiểm tra dữ liệu
});


// Thêm sản phẩm
export const addProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
  const response = await fetch("https://localhost:7163/api/Product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  return await response.json();
});

// Cập nhật sản phẩm
export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, updatedProduct }) => {
  await fetch(`https://localhost:7163/api/Product/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });
  return { id, updatedProduct };
});

// Xóa sản phẩm
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId) => {
  await fetch(`https://localhost:7163/api/Product/${productId}`, {
    method: "DELETE",
  });
  return productId;
});

// Tạo Slice Redux
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Nhận toàn bộ dữ liệu từ API
      })
      // .addCase(fetchProducts.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.items = action.payload;
      // })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Xử lý thêm sản phẩm
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Xử lý cập nhật sản phẩm
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload.updatedProduct;
        }
      })
      // Xử lý xóa sản phẩm
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
// export { addProduct, updateProduct, deleteProduct };
