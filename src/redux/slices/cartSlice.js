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
        (product) => product.productId === action.payload.productId
      );

      if (itemIndex >= 0) {
        // 🔄 Nếu sản phẩm đã tồn tại, cập nhật số lượng
        state.items[itemIndex].quantity = action.payload.quantity ?? 1;
      } else {
        // ✅ Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        state.items.push({ ...action.payload, quantity: action.payload.quantity ?? 1 });
      }

      console.log("📦 Giỏ hàng hiện tại:", state.items);
      localStorage.setItem("cart", JSON.stringify(state.items));
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
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      console.log("🧹 Đã xóa toàn bộ giỏ hàng!");
      localStorage.removeItem("cart");
    },

    // Cập nhật số lượng sản phẩm
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.productId === productId);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = quantity;
        console.log("🔄 Cập nhật số lượng sản phẩm:", state.items[itemIndex]);
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
