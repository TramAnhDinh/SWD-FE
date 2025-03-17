import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
// import productsSlice from './slices/productsSlice';
import contactReducer from './slices/contactSlice';  // Thêm dòng này
import orderReducer from './slices/orderSlice';
import userReducer from "./slices/userSlice";
import productsReducer from './slices/productsSlice';
import categoryReducer from "./slices/categorySlice";
import authReducer from "./authSlice"; 
const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderReducer,
    user: userReducer,
    products: productsReducer,
    contact: contactReducer,  
    category: categoryReducer,
    auth: authReducer,
  },
});

export default store;
