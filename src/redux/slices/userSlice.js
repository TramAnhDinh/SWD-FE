import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userId: "",  // Đảm bảo có userId
    username: "",
    email: "",
  },
  // user: null,
  // // role: null,
  // role: localStorage.getItem("role") || "",
  // token: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.token = action.payload.token;
      localStorage.setItem("role", action.payload.role); // Lưu vào localStorage
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunk để lấy role của user sau khi login
// export const fetchUserRole = createAsyncThunk("auth/fetchUserRole", async (userId) => {
//   const response = await fetch("http://localhost:7163/api/roles");
//   const data = await response.json();
//   const roles = data.$values; // Danh sách vai trò

//   // Tìm roleName theo userId
//   let userRole = null;
//   roles.forEach((role) => {
//     if (role.users.$values.some((user) => user.$id == userId)) {
//       userRole = role.roleName; // Lấy roleName
//     }
//   });

//   return userRole;
// });

// const initialState = {
//   userId: localStorage.getItem("userId") || null,
//   role: localStorage.getItem("role") || null,
//   token: localStorage.getItem("token") || null,
// };

// const userSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.userId = action.payload.id;
//       state.token = action.payload.token;
//       localStorage.setItem("userId", action.payload.id);
//       localStorage.setItem("token", action.payload.token);
//     },
//     logout: (state) => {
//       state.userId = null;
//       state.role = null;
//       state.token = null;
//       localStorage.removeItem("userId");
//       localStorage.removeItem("role");
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchUserRole.fulfilled, (state, action) => {
//       state.role = action.payload;
//       localStorage.setItem("role", action.payload);
//     });
//   },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;
