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


// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: { items: [] },  // 🛒 Thêm items để chứa mảng sản phẩm
//   reducers: {
//     addToCart: (state, action) => {
//       const item = state.items.find((product) => product.id === action.payload.id);
//       if (item) {
//         item.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        userRole: "staff", // Mặc định, thay bằng Redux state thực tế
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.userRole === "staff") {
                alert("Nhân viên không được phép mua hàng!");
                return;
            }
            const product = action.payload;
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        setUserRole: (state, action) => {
            state.userRole = action.payload;
        },
    },
});

export const { addToCart, removeFromCart, clearCart, setUserRole } = cartSlice.actions;
export default cartSlice.reducer;
