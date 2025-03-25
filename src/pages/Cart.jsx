// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart?.items ?? []);
//   const userRole = useSelector((state) => state.auth.user?.role ?? "guest"); // Mặc định là "guest"
//   // const userRole = useSelector((state) => state.auth.user.role); // Lấy role từ Redux
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const handleCheckout = () => {
//     if (userRole && userRole === "staff") {
//       alert("Nhân viên không được phép mua hàng!");
//       return;
//     }
//     navigate("/checkout-confirmation");
//   };

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ hàng của bạn</h2>

//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-gray-600 mb-4 text-lg">Giỏ hàng của bạn đang trống.</p>
//           <button
//             onClick={() => navigate("/")}
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
//                       <p className="text-lg font-semibold">
//                         {item.name} × {item.quantity}
//                       </p>
//                       <p className="text-gray-600">{(item.price * item.quantity).toLocaleString()} VND</p>
//                     </div>
//                   </div>
//                   {userRole !== "staff" && ( // Ẩn nút xóa nếu là Staff
//                     <button
//                       onClick={() => dispatch(removeFromCart(item.id))}
//                       className="text-red-500 hover:text-red-700 transition"
//                     >
//                       ❌ Xóa
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 text-right">
//               <p className="text-xl font-bold">Tổng cộng: {totalPrice.toLocaleString()} VND</p>
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4 mt-6">
//             {userRole !== "staff" && ( // Ẩn nút xóa giỏ hàng nếu là Staff
//               <button
//                 onClick={() => dispatch(clearCart())}
//                 className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition shadow-md"
//               >
//                 🗑 Xóa hết
//               </button>
//             )}
//             <button
//               onClick={() => navigate("/")}
//               className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
//             >
//               🔄 Tiếp tục mua hàng
//             </button>
//             {userRole !== "staff" && ( // Ẩn nút thanh toán nếu là Staff
//               <button
//                 onClick={handleCheckout}
//                 className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition shadow-md"
//               >
//                 💳 Thanh toán
//               </button>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../redux/slices/cartSlice";
// import { useState } from "react";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items ?? []);
//   const userRole = useSelector((state) => state.auth.user?.role ?? "guest");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   const handleCheckout = async () => {
//     if (userRole && userRole === "staff") {
//       alert("Nhân viên không được phép mua hàng!");
//       return;
//     }

//     if (cartItems.length === 0) {
//       alert("Giỏ hàng của bạn đang trống!");
//       return;
//     }

//     const orderData = {
//       customizeProductId: 0,
//       orderDate: new Date().toISOString(),
//       deliveryDate: new Date().toISOString(),
//       recipientName: "string",
//       deliveryAddress: "string",
//       shippingMethod: "string",
//       shippingFee: 0,
//       notes: "string",
//       price: totalPrice,
//       quantity: totalQuantity,
//       totalPrice: totalPrice,
//     };

//     try {
//       setLoading(true);
//       const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (!response.ok) {
//         throw new Error("Đặt hàng thất bại!");
//       }

//       alert("Đặt hàng thành công!");
//       dispatch(clearCart());
//       navigate("/checkout-confirmation");
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ hàng của bạn</h2>

//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-gray-600 mb-4 text-lg">Giỏ hàng của bạn đang trống</p>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => navigate("/")}>
//             🛍️ Tiếp tục mua sắm
//           </button>
//         </div>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-center p-4 border-b">
//               <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
//               <div className="flex-1 px-4">
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p>{item.quantity} x {item.price.toLocaleString()} VND</p>
//               </div>
//               <button className="text-red-500">❌ Xóa</button>
//             </div>
//           ))}

//           <div className="text-right text-lg font-semibold mt-4">
//             Tổng cộng: {totalPrice.toLocaleString()} VND
//           </div>

//           <div className="flex justify-between mt-6">
//             <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => dispatch(clearCart())}>🗑️ Xóa hết</button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/")}>🛍️ Tiếp tục mua sắm</button>
//             <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleCheckout} disabled={loading}>
//               {loading ? "Đang xử lý..." : "💳 Thanh toán"}
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeFromCart } from "../redux/slices/cartSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items ?? []);
  const userRole = useSelector((state) => state.auth.user?.role ?? "guest");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = async () => {
    if (userRole && userRole === "staff") {
      alert("Nhân viên không được phép mua hàng!");
      return;
    }

    if (cartItems.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    const orderData = {
      customizeProductId: 0,
      orderDate: new Date().toISOString(),
      deliveryDate: new Date().toISOString(),
      recipientName: "string",
      deliveryAddress: "string",
      shippingMethod: "string",
      shippingFee: 0,
      notes: "string",
      price: totalPrice,
      quantity: totalQuantity,
      totalPrice: totalPrice,
    };

    try {
      setLoading(true);
      const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Đặt hàng thất bại!");
      }

      alert("Đặt hàng thành công!");
      dispatch(clearCart());
      navigate("/checkout-confirmation");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Giỏ hàng của bạn</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4 text-lg">Giỏ hàng của bạn đang trống</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => navigate("/")}>
            🛍️ Tiếp tục mua sắm
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              {/* <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
               */}
               <img 
                    src={item.image?.startsWith("http") ? item.image : `https://localhost:7163/uploads/${item.image?.split("\\").pop()}`} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded"
                    onError={(e) => e.target.src = "/fallback-image.jpg"} 
              />

              <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>{item.quantity} x {item.price.toLocaleString()} VND</p>
              </div>
              {/* <button className="text-red-500" onClick={() => dispatch(removeFromCart(item.id))}>
                ❌ Xóa
              </button> */}
             <button
                className="text-red-500"
                onClick={() => {
                console.log("🛠️ Xóa sản phẩm:", item);
                console.log("🔍 ID sản phẩm:", item.productId || item.$id); // Test xem ID nào đúng

                const itemId = item.productId || item.$id; // Chọn ID phù hợp
                if (!itemId) {
                console.error("❌ Lỗi: item.id bị undefined hoặc null!");
                return;
                }

                dispatch(removeFromCart(itemId));
                }}
              >
                ❌ Xóa
            </button>


            </div>
          ))}

          <div className="text-right text-lg font-semibold mt-4">
            Tổng cộng: {totalPrice.toLocaleString()} VND
          </div>

          <div className="flex justify-between mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => dispatch(clearCart())}>🗑️ Xóa hết</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/")}>🛍️ Tiếp tục mua sắm</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleCheckout} disabled={loading}>
              {loading ? "Đang xử lý..." : "💳 Thanh toán"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
