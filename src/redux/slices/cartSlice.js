// // import { createSlice } from '@reduxjs/toolkit';

// // const cartSlice = createSlice({
// //   name: 'cart',
// //   initialState: [],
// //   reducers: {
// //     addToCart: (state, action) => {
// //       const item = state.find((product) => product.id === action.payload.id);
// //       if (item) {
// //         item.quantity += 1;
// //       } else {
// //         state.push({ ...action.payload, quantity: 1 });
// //       }
// //     },
// //     removeFromCart: (state, action) => {
// //       return state.filter((item) => item.id !== action.payload);
// //     },
// //     clearCart: () => [],
// //   },
// // });

// // export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// // export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items: [],
//         userRole: localStorage.getItem("role") || "guest", // Mặc định là "guest" nếu chưa login
//         // userRole: "staff", 
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             if (state.userRole && state.userRole.toLowerCase() === "staff") {
//                 alert("Nhân viên không được phép mua hàng!");
//                 return;
//             }
            
//             // if (state.userRole === "staff") {
//             //     alert("Nhân viên không được phép mua hàng!");
//             //     return;
//             // }
//             const product = action.payload;
//             const existingItem = state.items.find((item) => item.id === product.id);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 state.items.push({ ...product, quantity: 1 });
//             }
//         },
//         removeFromCart: (state, action) => {
//             state.items = state.items.filter((item) => item.id !== action.payload);
//         },
//         clearCart: (state) => {
//             state.items = [];
//         },
//         setUserRole: (state, action) => {
//             state.userRole = action.payload || "guest"; // Nếu không có payload, mặc định là "guest"
//             localStorage.setItem("role", state.userRole); // Lưu vào localStorage
//             // state.userRole = action.payload;
//         },
//     },
// });

// export const { addToCart, removeFromCart, clearCart, setUserRole } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// // import { clearCart } from "../slices/cartSlice";


// const initialState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
//     },
//     // Thêm action clearCart
//     clearCart: (state) => {
//       state.cartItems = [];
//     }
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions; // Xuất action đúng
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const loadCartFromStorage = () => {
//   try {
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   } catch (error) {
//     console.error("Lỗi khi tải giỏ hàng từ localStorage:", error);
//     return [];
//   }
// };

// const saveCartToStorage = (cartItems) => {
//   try {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   } catch (error) {
//     console.error("Lỗi khi lưu giỏ hàng vào localStorage:", error);
//   }
// };

// const initialState = {
//   cartItems: loadCartFromStorage(),
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.cartItems.find(item => item.id === action.payload.id);
//       if (!existingItem) {
//         state.cartItems = [...state.cartItems, action.payload];
//         saveCartToStorage(state.cartItems);
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
//       saveCartToStorage(state.cartItems);
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       localStorage.removeItem("cartItems");
//     }
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },  // 🛒 Thêm items để chứa mảng sản phẩm
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
