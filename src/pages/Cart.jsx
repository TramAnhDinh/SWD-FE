// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart?.items ?? []);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const handleCheckout = () => navigate('/checkout-confirmation');

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ hàng của bạn</h2>

//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-gray-600 mb-4 text-lg">Giỏ hàng của bạn đang trống.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
//           >
//             🛍 Tiếp tục mua sắm
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id} className="flex justify-between items-center py-4 border-b">
//                   <div className="flex items-center gap-4">
//                     {item.image && (
//                       <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg shadow" />
//                     )}
//                     <div>
//                       <p className="text-lg font-semibold">{item.name} × {item.quantity}</p>
//                       <p className="text-gray-600">{(item.price * item.quantity).toLocaleString()} USD</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => dispatch(removeFromCart(item.id))}
//                     className="text-red-500 hover:text-red-700 transition"
//                   >
//                     ❌ Xóa
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 text-right">
//               <p className="text-xl font-bold">Tổng cộng: {totalPrice.toLocaleString()} USD</p>
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4 mt-6">
//             <button
//               onClick={() => dispatch(clearCart())}
//               className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition shadow-md"
//             >
//               🗑 Xóa hết
//             </button>
//             <button
//               onClick={() => navigate('/')}
//               className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
//             >
//               🔄 Tiếp tục mua hàng
//             </button>
//             <button
//               onClick={handleCheckout}
//               className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition shadow-md"
//             >
//               💳 Thanh toán
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items ?? []);
  const userRole = useSelector((state) => state.auth.user.role); // Lấy role từ Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (userRole === "staff") {
      alert("Nhân viên không được phép mua hàng!");
      return;
    }
    navigate("/checkout-confirmation");
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ hàng của bạn</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4 text-lg">Giỏ hàng của bạn đang trống.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            🛍 Tiếp tục mua sắm
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center py-4 border-b">
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg shadow" />
                    )}
                    <div>
                      <p className="text-lg font-semibold">
                        {item.name} × {item.quantity}
                      </p>
                      <p className="text-gray-600">{(item.price * item.quantity).toLocaleString()} USD</p>
                    </div>
                  </div>
                  {userRole !== "staff" && ( // Ẩn nút xóa nếu là Staff
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      ❌ Xóa
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <p className="text-xl font-bold">Tổng cộng: {totalPrice.toLocaleString()} USD</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {userRole !== "staff" && ( // Ẩn nút xóa giỏ hàng nếu là Staff
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition shadow-md"
              >
                🗑 Xóa hết
              </button>
            )}
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              🔄 Tiếp tục mua hàng
            </button>
            {userRole !== "staff" && ( // Ẩn nút thanh toán nếu là Staff
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition shadow-md"
              >
                💳 Thanh toán
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
