// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from './slices/productsSlice';
// import cartReducer from './slices/cartSlice';
// import contactReducer from './slices/contactSlice';

// const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     cart: cartReducer,
//     contact: contactReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import productsSlice from './slices/productsSlice';
import contactReducer from './slices/contactSlice';  // Thêm dòng này

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    contact: contactReducer,  // Đăng ký reducer mới
  },
});

export default store;
