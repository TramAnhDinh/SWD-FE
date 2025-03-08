import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items ?? []);  // Sử dụng giá trị mặc định là mảng rỗng nếu undefined
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Tính tổng giá tiền
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => navigate('/checkout');  // Hàm chuyển hướng tới trang thanh toán

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Giỏ hàng</h2>

      {/* Kiểm tra nếu giỏ hàng trống */}
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Giỏ hàng của bạn đang trống.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Tiếp tục mua sản phẩm
          </button>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 border-b pb-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name} x {item.quantity}</p>
                  <p className="text-gray-600">{(item.price * item.quantity).toLocaleString()} USD</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>

          <p className="text-xl font-bold mt-6">Tổng: {totalPrice.toLocaleString()} USD</p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Xóa hết
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Tiếp tục mua sản phẩm
            </button>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Thanh Toán
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

