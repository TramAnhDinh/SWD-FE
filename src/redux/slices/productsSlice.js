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

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Fetch dữ liệu từ API
// // export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
// //   const response = await fetch("https://localhost:7163/api/Product");
// //   const data = await response.json();
// //   return data?.data?.$values ?? []; // Kiểm tra dữ liệu
// // });

// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   const response = await fetch("https://localhost:7163/api/Product");
//   const data = await response.json();

//   console.log("API Product Response:", data);
  
//   return data;
//   // return data?.data?.$values ?? []; // Kiểm tra dữ liệu
// });


// // Thêm sản phẩm
// export const addProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
//   const response = await fetch("https://localhost:7163/api/Product", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       categoryId: newProduct.categoryId,
//       productName: newProduct.productName,
//       price: newProduct.price,
//       stockInStorage: newProduct.stockInStorage,
//       image: newProduct.image, // Đảm bảo đúng đường dẫn
//       description: newProduct.description,
//     }),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.title || "Lỗi không xác định");
//   }

//   return await response.json();
// });


// // export const addProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
// //   const response = await fetch("https://localhost:7163/api/Product", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(newProduct),
// //   });
// //   return await response.json();
// // });

// // Cập nhật sản phẩm
// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ id, updatedProduct }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`https://localhost:7163/api/Product/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productId: id, // API yêu cầu có productId trong body
//           categoryId: updatedProduct.categoryId,
//           productName: updatedProduct.productName,
//           price: updatedProduct.price,
//           stockInStorage: updatedProduct.stockInStorage,
//           image: updatedProduct.image,
//           description: updatedProduct.description,
//           isDeleted: updatedProduct.isDeleted ?? false, // Nếu API cần
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Lỗi không xác định");
//       }

//       const data = await response.json();
//       return { id, updatedProduct, response: data };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


// // export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, updatedProduct }) => {
// //   await fetch(`https://localhost:7163/api/Product/${id}`, {
// //     method: "PUT",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(updatedProduct),
// //   });
// //   return { id, updatedProduct };
// // });

// // Xóa sản phẩm
// export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId) => {
//   await fetch(`https://localhost:7163/api/Product/${productId}`, {
//     method: "DELETE",
//   });
//   return productId;
// });

// // Tạo Slice Redux
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
//         state.items = action.payload?.data?.$values ?? [];// Nhận toàn bộ dữ liệu từ API
//       })
//       // .addCase(fetchProducts.fulfilled, (state, action) => {
//       //   state.status = "succeeded";
//       //   state.items = action.payload;
//       // })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       // Xử lý thêm sản phẩm
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       // Xử lý cập nhật sản phẩm
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         console.log("Updated Product Response:", action.payload);
    
//         const updatedProduct = action.payload.response; // API trả về sản phẩm sau khi cập nhật
//         if (!updatedProduct) return; // Kiểm tra nếu response null thì không làm gì
    
//         // Kiểm tra ID trả về có khớp với state hay không
//         const productId = updatedProduct.id || updatedProduct.productId; 
    
//         const index = state.items.findIndex((product) => product.id === productId);
//         if (index !== -1) {
//             state.items[index] = { ...state.items[index], ...updatedProduct };
//         }
//     });
    
//     //   .addCase(updateProduct.fulfilled, (state, action) => {
//     //     console.log("Updated Product Response:", action.payload);
    
//     //     const updatedProduct = action.payload.response; // API trả về sản phẩm sau khi cập nhật
//     //     const index = state.items.findIndex((product) => product.id === updatedProduct.productId);
//     //     if (index !== -1) {
//     //         state.items[index] = updatedProduct;
//     //     }
//     // })
    
//       // .addCase(updateProduct.fulfilled, (state, action) => {
//       //   const { id, updatedProduct } = action.payload;
//       //   const index = state.items.findIndex((product) => product.id === id);
//       //   if (index !== -1) {
//       //     state.items[index] = { ...state.items[index], ...updatedProduct };
//       //   }
//       // })
      
//       // .addCase(updateProduct.fulfilled, (state, action) => {
//       //   const index = state.items.findIndex((product) => product.id === action.payload.id);
//       //   if (index !== -1) {
//       //     state.items[index] = action.payload.updatedProduct;
//       //   }
//       // })
//       // Xử lý xóa sản phẩm
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.items = state.items.filter((product) => product.id !== action.payload);
//       });
//   },
// });

// export default productsSlice.reducer;
// // export { addProduct, updateProduct, deleteProduct };


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Fetch dữ liệu từ API
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   const response = await fetch("https://localhost:7163/api/Product");
//   const data = await response.json();

//   console.log("API Product Response:", data);
  
//   return data?.data?.$values ?? [];
// });

// // Thêm sản phẩm
// export const addProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
//   const response = await fetch("https://localhost:7163/api/Product", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newProduct),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.title || "Lỗi không xác định");
//   }

//   return await response.json();
// });

// // Cập nhật sản phẩm
// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ id, updatedProduct }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`https://localhost:7163/api/Product/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           productId: id,
//           ...updatedProduct,
//           isDeleted: updatedProduct.isDeleted ?? false,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Lỗi không xác định");
//       }

//       const data = await response.json();
//       return { id, updatedProduct: data };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Xóa sản phẩm
// export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId) => {
//   await fetch(`https://localhost:7163/api/Product/${productId}`, {
//     method: "DELETE",
//   });
//   return productId;
// });

// // Tạo Slice Redux
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
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         console.log("Updated Product Response:", action.payload);
//         const { id, updatedProduct } = action.payload;
//         const index = state.items.findIndex((product) => product.id === id);
//         if (index !== -1) {
//           state.items[index] = { ...state.items[index], ...updatedProduct };
//         }
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.items = state.items.filter((product) => product.id !== action.payload);
//       });
//   },
// });

// const productsReducer = productsSlice.reducer;
// export default productsReducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL = "http://localhost:7163/api/products"; // Đổi URL phù hợp với backend

// // Lấy danh sách sản phẩm từ API
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   try {
//     const response = await fetch("https://localhost:7163/api/Product");

//     if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm!");

//     const data = await response.json();
//     console.log("API Product Response:", data);

//     return data?.data?.$values ?? []; 
//   } catch (error) {
//     console.error("Lỗi fetchProducts:", error);
//     return [];
//   }
// });



// // Xóa sản phẩm theo ID
// export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId, { dispatch }) => {
//   try {
//       const response = await fetch(`https://localhost:7163/api/Product/${productId}`, {
//           method: "DELETE",
//           headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) throw new Error("Lỗi khi xóa sản phẩm!");

//       console.log(`Sản phẩm ${productId} đã bị xóa thành công.`);
      
//       // Sau khi xóa, gọi lại API để cập nhật danh sách
//       dispatch(fetchProducts());

//       return productId;
//   } catch (error) {
//       console.error("Lỗi deleteProduct:", error);
//       throw error;
//   }
// });

// // Thêm sản phẩm mới
// export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(product),
//   });
//   if (!response.ok) throw new Error("Lỗi khi thêm sản phẩm");
//   return await response.json();
// });

// // Cập nhật sản phẩm
// export const updateProduct = createAsyncThunk("products/updateProduct", async (product) => {
//   const response = await fetch(`${API_URL}/${product.productId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(product),
//   });
//   if (!response.ok) throw new Error("Lỗi khi cập nhật sản phẩm");
//   return await response.json();
// });

// const productsSlice = createSlice({
//   name: "products",
//   initialState: { items: [], status: "idle", error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.status = "succeeded";
//       })
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.items = state.items.filter((item) => item.productId !== action.payload);
//       })
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         const index = state.items.findIndex((item) => item.productId === action.payload.productId);
//         if (index !== -1) state.items[index] = action.payload;
//       })
//       .addMatcher(
//         (action) => action.type.endsWith("/pending"),
//         (state) => {
//           state.status = "loading";
//         }
//       )
//       .addMatcher(
//         (action) => action.type.endsWith("/rejected"),
//         (state, action) => {
//           state.status = "failed";
//           state.error = action.error.message;
//         }
//       );
//   },
// });

// export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://localhost:7163/api/Product"; // Sửa URL đúng chuẩn

// Lấy danh sách sản phẩm từ API, lọc bỏ sản phẩm bị xóa
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//     try {
//       const response = await fetch("https://localhost:7163/api/Product");
  
//       if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm!");
  
//       const data = await response.json();
//       console.log("API Product Response:", data);
  
//       return data?.data?.$values ?? []; 
//     } catch (error) {
//       console.error("Lỗi fetchProducts:", error);
//       return [];
//     }
//   });

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await fetch("https://localhost:7163/api/Product");

    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu sản phẩm!");

    const data = await response.json();
    console.log("API Product Response:", data);

    // Kiểm tra chính xác xem `data` chứa danh sách sản phẩm ở đâu
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.data?.$values)) return data.data.$values;
    
    return [];
  } catch (error) {
    console.error("Lỗi fetchProducts:", error);
    return [];
  }
});


// Xóa sản phẩm theo ID
// export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId, { dispatch }) => {
//   try {
//     const response = await fetch(`${API_URL}/${productId}`, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!response.ok) throw new Error("Lỗi khi xóa sản phẩm!");

//     console.log(`Sản phẩm ${productId} đã bị xóa thành công.`);

//     // Gọi lại fetchProducts để cập nhật Redux store
//     dispatch(fetchProducts());
//     return productId;
//   } catch (error) {
//     console.error("Lỗi deleteProduct:", error);
//     throw error;
//   }
// });

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { dispatch, rejectWithValue }) => {
      try {
          const response = await fetch(`https://localhost:7163/api/Product/${productId}`, {
              method: "DELETE",
          });

          if (!response.ok) throw new Error("Lỗi khi xóa sản phẩm!");

          console.log(`Sản phẩm ${productId} đã bị xóa thành công.`);

          // Cập nhật danh sách sản phẩm sau khi xoá
          dispatch(fetchProducts());

          return productId;
      } catch (error) {
          console.error("Lỗi deleteProduct:", error);
          return rejectWithValue(error.message);
      }
  }
);



// Thêm sản phẩm mới
export const addProduct = createAsyncThunk("products/addProduct", async (product, { dispatch }) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) throw new Error("Lỗi khi thêm sản phẩm");

    const newProduct = await response.json();
    dispatch(fetchProducts()); // Cập nhật lại danh sách
    return newProduct;
  } catch (error) {
    console.error("Lỗi addProduct:", error);
    throw error;
  }
});

// Cập nhật sản phẩm
export const updateProduct = createAsyncThunk("products/updateProduct", async (product, { dispatch }) => {
  try {
    const response = await fetch(`${API_URL}/${product.productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) throw new Error("Lỗi khi cập nhật sản phẩm");

    const updatedProduct = await response.json();
    dispatch(fetchProducts()); // Cập nhật lại danh sách
    return updatedProduct;
  } catch (error) {
    console.error("Lỗi updateProduct:", error);
    throw error;
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.productId !== action.payload);
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.productId === action.payload.productId);
        if (index !== -1) state.items[index] = action.payload;
      })
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
