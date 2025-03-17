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

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//       user: null,
//       role: "guest",  // Phải đảm bảo role đúng
//     },
//     reducers: {
//       loginSuccess: (state, action) => {
//         state.user = action.payload.user;
//         state.role = action.payload.role; // Đặt role chính xác từ API hoặc localStorage
//       },
//       logout: (state) => {
//         state.user = null;
//         state.role = "";
//       },
//     },
//   });

// const initialState = {
//   user: {
//     role: "guest",
//   },
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { setUser } = authSlice.actions;
// export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Lưu thông tin user
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = {
        userId: action.payload.userId, // Đảm bảo có userId
        username: action.payload.username,
        email: action.payload.email,
      };
      // state.user = action.payload; // Lưu user vào Redux
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
