import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user: {
//             role: "staff", // Thay bằng giá trị thực tế khi đăng nhập
//         },
//     },
//     reducers: {
//         setUserRole: (state, action) => {
//             state.user.role = action.payload;
//         },
//     },
// });

// export const { setUserRole } = authSlice.actions;
// export default authSlice.reducer;

const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      role: "",  // Phải đảm bảo role đúng
    },
    reducers: {
      loginSuccess: (state, action) => {
        state.user = action.payload.user;
        state.role = action.payload.role; // Đặt role chính xác từ API hoặc localStorage
      },
      logout: (state) => {
        state.user = null;
        state.role = "";
      },
    },
  });
  