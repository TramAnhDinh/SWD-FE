// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { items: [] }, // 🛒 Giỏ hàng chứa danh sách sản phẩm
//   reducers: {
//     addToCart: (state, action) => {
//       console.log("🛒 Thêm vào giỏ hàng:", action.payload);

//       // Kiểm tra xem sản phẩm đã có trong giỏ hay chưa (dựa trên id + name + categoryId)
//       const itemIndex = state.items.findIndex(
//         (product) =>
//           product.id === action.payload.id &&
//           product.productId  === action.payload.productId &&
//           product.categoryId === action.payload.categoryId &&
//           product.productName === action.payload.productName
//       );

//       if (itemIndex >= 0) {
//         // 🔄 Nếu sản phẩm đã tồn tại, cập nhật số lượng
//         state.items[itemIndex].quantity += action.payload.quantity ?? 1;
//         console.log("🔄 Cập nhật số lượng sản phẩm:", state.items[itemIndex]);
//       } else {
//         // ✅ Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
//         state.items.push({ ...action.payload, quantity: action.payload.quantity ?? 1 });
//         console.log("✅ Sản phẩm mới được thêm vào:", action.payload);
//       }

//       console.log("📦 Giỏ hàng hiện tại:", JSON.parse(JSON.stringify(state.items)));
//     },

//     // removeFromCart: (state, action) => {
//     //   state.items = state.items.filter((item) => item.id !== action.payload);
//     //   console.log("🗑 Xóa sản phẩm khỏi giỏ:", action.payload);
//     // },
//     // 🗑 Xóa 1 sản phẩm khỏi giỏ hàng
//     removeFromCart: (state, action) => {
//       if (!action.payload) {
//         console.error("❌ Lỗi: action.payload bị undefined khi xoá sản phẩm.");
//         return;
//       }
      
//       // state.items = state.items.filter((item) => item.id !== action.payload
//       // && item.$id !== action.payload);
//       state.items = state.items.filter((item) => 
//         item.productId.toString() !== action.payload.toString()
//       );
      
//       console.log("🗑️ Xoá sản phẩm có ID:", action.payload);
//     },
    

//     // ➖ Giảm số lượng sản phẩm (nếu > 1) hoặc xoá nếu chỉ còn 1
//     decreaseQuantity: (state, action) => {
//       const { id, productId } = action.payload;
//       const itemIndex = state.items.findIndex((item) => item.id === id && item.productId === productId);

//       if (itemIndex >= 0) {
//         if (state.items[itemIndex].quantity > 1) {
//           state.items[itemIndex].quantity -= 1;
//           console.log("➖ Giảm số lượng:", state.items[itemIndex]);
//         } else {
//           state.items.splice(itemIndex, 1);
//           console.log("🗑 Sản phẩm bị xóa vì số lượng về 0:", action.payload);
//         }
//       }
//     },

//     // 🧹 Xóa toàn bộ giỏ hàng
//     clearCart: (state) => {
//       state.items = [];
//       console.log("🧹 Đã xóa toàn bộ giỏ hàng!");
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// 🔄 Lấy dữ liệu từ localStorage khi khởi tạo
const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("🛒 Thêm vào giỏ hàng:", action.payload);

      // Kiểm tra xem sản phẩm đã có trong giỏ hay chưa
      const itemIndex = state.items.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.productId === action.payload.productId &&
          product.categoryId === action.payload.categoryId &&
          product.productName === action.payload.productName
      );

      if (itemIndex >= 0) {
        // 🔄 Nếu sản phẩm đã tồn tại, cập nhật số lượng
        state.items[itemIndex].quantity += action.payload.quantity ?? 1;
      } else {
        // ✅ Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        state.items.push({ ...action.payload, quantity: action.payload.quantity ?? 1 });
      }

      console.log("📦 Giỏ hàng hiện tại:", state.items);
      localStorage.setItem("cart", JSON.stringify(state.items)); // 💾 Lưu vào localStorage
    },

    removeFromCart: (state, action) => {
      if (!action.payload) {
        console.error("❌ Lỗi: action.payload bị undefined khi xoá sản phẩm.");
        return;
      }

      state.items = state.items.filter((item) => 
        item.productId.toString() !== action.payload.toString()
      );

      console.log("🗑️ Xoá sản phẩm có ID:", action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items)); // 💾 Cập nhật localStorage
    },

    decreaseQuantity: (state, action) => {
      const { id, productId } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id && item.productId === productId);

      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1); // Xóa sản phẩm nếu số lượng = 0
        }
      }

      console.log("➖ Giảm số lượng sản phẩm:", action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items)); // 💾 Cập nhật localStorage
    },

    clearCart: (state) => {
      state.items = [];
      console.log("🧹 Đã xóa toàn bộ giỏ hàng!");
      localStorage.removeItem("cart"); // 🗑 Xóa giỏ hàng khỏi localStorage
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
