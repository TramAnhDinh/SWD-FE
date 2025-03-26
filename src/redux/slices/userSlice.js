import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clearCart } from "./cartSlice";

const loadUserFromStorage = () => {
  try {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (!token || !userStr) return null;
    
    const user = JSON.parse(userStr);
    return {
      token,
      role: user.role,
      username: user.username,
      isAuthenticated: true
    };
  } catch (error) {
    console.error("Error loading user from storage:", error);
    return null;
  }
};

const initialState = loadUserFromStorage() || {
  token: null,
  role: null,
  username: null,
  isAuthenticated: false,
};

// Create logout thunk
export const logoutAndClearCart = createAsyncThunk(
  'user/logoutAndClearCart',
  async (_, { dispatch }) => {
    dispatch(clearCart());
    dispatch(logout());
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, role, username } = action.payload;
      
      // Validate data before saving
      if (!token || !role || !username) {
        console.error("Invalid user data:", action.payload);
        return;
      }

      // Update state
      state.token = token;
      state.role = role;
      state.username = username;
      state.isAuthenticated = true;
      
      // Save to localStorage
      try {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify({ role, username }));
      } catch (error) {
        console.error("Error saving user to storage:", error);
      }
    },
    logout: (state) => {
      // Lưu username hiện tại trước khi logout để giữ giỏ hàng
      const currentUsername = state.username;
      
      // Reset user state
      state.token = null;
      state.role = null;
      state.username = null;
      state.isAuthenticated = false;
      
      // Chỉ xóa thông tin đăng nhập, giữ lại giỏ hàng
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      console.log(`Logged out. Cart data for ${currentUsername} is preserved.`);
    },
  },
});

export const { setUser, logout } = userSlice.actions;
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
