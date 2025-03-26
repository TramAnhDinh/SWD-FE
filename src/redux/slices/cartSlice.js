import { createSlice } from "@reduxjs/toolkit";

// Helper function to get cart key for current user
const getCartKey = () => {
  const userStr = localStorage.getItem("user");
  if (!userStr) return "cart";
  const user = JSON.parse(userStr);
  return `cart_${user.username}`;
};

// Helper function to load cart from localStorage
const loadCartFromStorage = () => {
  const cartKey = getCartKey();
  const cartData = localStorage.getItem(cartKey);
  return cartData ? JSON.parse(cartData) : [];
};

// Helper function to save cart to localStorage
const saveCartToStorage = (items) => {
  const cartKey = getCartKey();
  localStorage.setItem(cartKey, JSON.stringify(items));
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("🛒 Thêm vào giỏ hàng:", action.payload);

      const itemIndex = state.items.findIndex(
        (product) => product.productId === action.payload.productId
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity ?? 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity ?? 1 });
      }

      console.log("📦 Giỏ hàng hiện tại:", state.items);
      saveCartToStorage(state.items);
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
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      console.log("🧹 Đã xóa toàn bộ giỏ hàng!");
      const cartKey = getCartKey();
      localStorage.removeItem(cartKey);
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.productId === productId);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = quantity;
        console.log("🔄 Cập nhật số lượng sản phẩm:", state.items[itemIndex]);
        saveCartToStorage(state.items);
      }
    },

    // Add new action to load cart for specific user
    loadUserCart: (state) => {
      state.items = loadCartFromStorage();
    }
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity, loadUserCart } = cartSlice.actions;
export default cartSlice.reducer;
