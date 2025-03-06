import React, { createContext, useContext, useState } from 'react';

// Tạo Context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Hàm thêm sản phẩm vào giỏ
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Hàm xóa tất cả sản phẩm khỏi giỏ
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
