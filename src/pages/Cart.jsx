// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../redux/slices/cartSlice';

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl mb-4">Giỏ hàng</h2>
//       {cart.map((item) => (
//         <div key={item.id} className="border-b py-2">
//           <p>{item.name} x {item.quantity}</p>
//           <button onClick={() => dispatch(removeFromCart(item.id))}>Xóa</button>
//         </div>
//       ))}
//       <h3 className="mt-4">Tổng: ${total}</h3>
//       <button className="bg-red-500 text-white p-2 mt-2" onClick={() => dispatch(clearCart())}>
//         Xóa hết
//       </button>
//     </div>
//   );
// };

// export default Cart;

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

          {/* Hiển thị tổng tiền */}
          <p className="text-xl font-bold mt-6">Tổng: {totalPrice.toLocaleString()} USD</p>

          <div className="flex gap-4 mt-4">
            {/* Nút xóa hết sản phẩm */}
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Xóa hết
            </button>
            {/* Nút tiếp tục mua sản phẩm */}
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Tiếp tục mua sản phẩm
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

