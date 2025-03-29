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

      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity; //Cập nhật tổng giá tiền
      } else {
        const minQuantity = 10; //Số lượng tối thiểu khi thêm mới
        state.items.push({
          ...action.payload,
          quantity: minQuantity,
          totalPrice: action.payload.price * minQuantity, //Thêm mới cũng có totalPrice
          isCustomProduct: action.payload.isCustomProduct || false,
          customDescription: action.payload.customDescription || '',
        });
      }

      //cập nhật tổng giá tiền ngay sau khi thêm vào giỏ
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);

      console.log("📦 Giỏ hàng hiện tại:", state.items);
      
      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action) => {
      if (!action.payload) {
        console.error("Lỗi: action.payload bị undefined khi xoá sản phẩm.");
        return;
      }

      state.items = state.items.filter((item) => 
        item.productId.toString() !== action.payload.toString()
      );

      console.log("Xoá sản phẩm có ID:", action.payload);
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      console.log(" Đã xóa toàn bộ giỏ hàng!");
      const cartKey = getCartKey();
      localStorage.removeItem(cartKey);
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.productId === productId);

      if (item) {
        item.quantity = Math.max(quantity, 10); // Giữ số lượng tối thiểu là 10
        item.totalPrice = item.price * item.quantity; // Cập nhật tổng giá tiền ngay
        console.log("Cập nhật số lượng sản phẩm:", item);
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
