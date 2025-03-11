import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null, // 'success' | 'pending' | 'failed'
  orderDetails: null, // Lưu thông tin đơn hàng nếu cần
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.status = 'success';
      state.orderDetails = action.payload; // Lưu thông tin đơn hàng
    },
    resetOrder: (state) => {
      state.status = null;
      state.orderDetails = null;
    },
  },
});

export const { placeOrder, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
