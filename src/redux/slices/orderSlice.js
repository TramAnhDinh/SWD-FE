// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   status: null, // 'success' | 'pending' | 'failed'
//   orderDetails: null, // Lưu thông tin đơn hàng nếu cần
// };

// const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {
//     placeOrder: (state, action) => {
//       state.status = 'success';
//       state.orderDetails = action.payload; // Lưu thông tin đơn hàng
//     },
//     resetOrder: (state) => {
//       state.status = null;
//       state.orderDetails = null;
//     },
//   },
// });

// export const { placeOrder, resetOrder } = orderSlice.actions;
// export default orderSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://localhost:7163/api/Orders';

// Async thunk để đặt hàng
export const placeOrder = createAsyncThunk('order/placeOrder', async (orderData, { rejectWithValue }) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Đặt hàng thất bại!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Async thunk để lấy thông tin đơn hàng
export const fetchOrder = createAsyncThunk('order/fetchOrder', async (orderId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${orderId}`);

    if (!response.ok) {
      throw new Error('Không tìm thấy đơn hàng!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  status: null, // 'success' | 'pending' | 'failed'
  orderDetails: null, // Lưu thông tin đơn hàng
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.status = null;
      state.orderDetails = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Xử lý đặt hàng
      .addCase(placeOrder.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = 'success';
        state.orderDetails = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Xử lý lấy thông tin đơn hàng
      .addCase(fetchOrder.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = 'success';
        state.orderDetails = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
