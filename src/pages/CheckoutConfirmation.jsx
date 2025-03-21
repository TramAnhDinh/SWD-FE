// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart } from '../redux/slices/cartSlice';

// const CheckoutConfirmation = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items); // Lấy giỏ hàng từ Redux
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Tính tổng tiền

//   const [orderData, setOrderData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Cập nhật giá trị input
//   const handleChange = (e) => {
//     setOrderData({ ...orderData, [e.target.name]: e.target.value });
//   };

//   // Xử lý đặt hàng
//   const handleConfirmPayment = async () => {
//     if (!orderData.name || !orderData.address || !orderData.phone) {
//       alert("Vui lòng nhập đầy đủ thông tin!");
//       return;
//     }

//     if (cartItems.length === 0) {
//       alert("Giỏ hàng của bạn đang trống!");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("https://localhost:7163/api/Orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           recipientName: orderData.name,
//           deliveryAddress: orderData.address,
//           phone: orderData.phone,
//           shippingMethod: "Giao hàng nhanh",
//           status: "Đang xử lý",
//           totalPrice,
//           items: cartItems, // Gửi danh sách sản phẩm trong giỏ hàng
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Đặt hàng thất bại!");
//       }

//       const result = await response.json();
//       dispatch(clearCart()); // Xóa giỏ hàng sau khi đặt hàng thành công

//       alert("Đặt hàng thành công!");
//       navigate(`/order-tracking/${result.orderId}`); // Chuyển đến trang theo dõi đơn hàng
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-6">Xác nhận thanh toán</h2>

//       {/* Form điền thông tin thanh toán */}
//       <form className="space-y-4">
//         <div>
//           <label className="block font-semibold">Họ và tên:</label>
//           <input
//             type="text"
//             name="name"
//             value={orderData.name}
//             onChange={handleChange}
//             className="border p-2 w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold">Địa chỉ giao hàng:</label>
//           <input
//             type="text"
//             name="address"
//             value={orderData.address}
//             onChange={handleChange}
//             className="border p-2 w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold">Số điện thoại:</label>
//           <input
//             type="text"
//             name="phone"
//             value={orderData.phone}
//             onChange={handleChange}
//             className="border p-2 w-full"
//             required
//           />
//         </div>
//       </form>

//       {/* Hiển thị tổng tiền */}
//       <div className="mt-4">
//         <p className="text-lg font-semibold">Tổng tiền: {totalPrice.toLocaleString()} VND</p>
//       </div>

//       {/* Hiển thị lỗi nếu có */}
//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       {/* Nút hành động */}
//       <div className="flex gap-4 mt-6">
//         <button
//           onClick={() => navigate('/cart')}
//           className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
//         >
//           Quay lại
//         </button>
//         <button
//           onClick={handleConfirmPayment}
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//           disabled={loading}
//         >
//           {loading ? "Đang xử lý..." : "Xác nhận thanh toán"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutConfirmation;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../redux/slices/cartSlice";

// const CheckoutConfirmation = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const [orderData, setOrderData] = useState({
//     recipientName: "",
//     deliveryAddress: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setOrderData({ ...orderData, [e.target.name]: e.target.value });
//   };

//   const handleConfirmPayment = async () => {
//     if (!orderData.recipientName || !orderData.deliveryAddress || !orderData.phone) {
//       alert("Vui lòng nhập đầy đủ thông tin!");
//       return;
//     }

//     if (cartItems.length === 0) {
//       alert("Giỏ hàng của bạn đang trống!");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const requestBody = {
//       orderDate: new Date().toISOString(),
//       deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
//       recipientName: orderData.recipientName,
//       deliveryAddress: orderData.deliveryAddress,
//       shippingMethod: "Giao hàng nhanh",
//       shippingFee: 10,
//       notes: "Không có ghi chú",
//       totalPrice,
//       items: cartItems.map((item) => ({
//         customizeProductId: item.id,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//     };

//     try {
//       const response = await fetch("https://localhost:7163/api/Orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (!response.ok) {
//         throw new Error("Đặt hàng thất bại!");
//       }

//       const result = await response.json();
//       console.log("Kết quả đơn hàng:", result); // Kiểm tra dữ liệu trả về

//       dispatch(clearCart());
//       alert("Đặt hàng thành công!");
//       navigate(`/order-tracking/${result.orderId}`, { state: { orderDetails: result } });
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-6">Xác nhận thanh toán</h2>

//       <form className="space-y-4">
//         <div>
//           <label className="block font-semibold">Họ và tên:</label>
//           <input
//             type="text"
//             name="recipientName"
//             value={orderData.recipientName}
//             onChange={handleChange}
//             className="border p-2 w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold">Địa chỉ giao hàng:</label>
//           <input
//             type="text"
//             name="deliveryAddress"
//             value={orderData.deliveryAddress}
//             onChange={handleChange}
//             className="border p-2 w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold">Số điện thoại:</label>
//           <input
//             type="text"
//             name="phone"
//             value={orderData.phone}
//             onChange={handleChange}
//             className="border p-2 w-full"
//             required
//           />
//         </div>
//       </form>

//       <div className="mt-4">
//         <p className="text-lg font-semibold">Tổng tiền: {totalPrice.toLocaleString()} VND</p>
//       </div>

//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       <div className="flex gap-4 mt-6">
//         <button
//           onClick={() => navigate("/cart")}
//           className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
//         >
//           Quay lại
//         </button>
//         <button
//           onClick={handleConfirmPayment}
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//           disabled={loading}
//         >
//           {loading ? "Đang xử lý..." : "Xác nhận thanh toán"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutConfirmation;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

const CheckoutConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Lấy giỏ hàng từ Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Tính tổng tiền
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // State lưu thông tin đơn hàng
  const [orderData, setOrderData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  // Cập nhật giá trị input
  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleConfirmPayment = () => {
    if (!orderData.name || !orderData.address || !orderData.phone) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Tạo mã đơn hàng ngẫu nhiên
    const order = {
      id: "DH" + Math.floor(Math.random() * 1000000), // Ví dụ: DH345678
      ...orderData,
      totalPrice: totalPrice, // Thêm tổng tiền
      status: "Đang xử lý",
    };

    // Lưu đơn hàng vào localStorage
    localStorage.setItem("latestOrder", JSON.stringify(order));

    dispatch(clearCart()); // Xóa giỏ hàng sau khi thanh toán thành công
    alert("Thanh toán thành công!");
    navigate('/order-tracking'); // Chuyển đến trang theo dõi đơn hàng
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Xác nhận thanh toán</h2>

      {/* Form điền thông tin thanh toán */}
      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Họ và tên:</label>
          <input
            type="text"
            name="name"
            value={orderData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Địa chỉ giao hàng:</label>
          <input
            type="text"
            name="address"
            value={orderData.address}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Số điện thoại:</label>
          <input
            type="text"
            name="phone"
            value={orderData.phone}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
      </form>

      {/* Hiển thị tổng tiền */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Tổng tiền: {totalPrice.toLocaleString()} VND</h3>
      </div>

      {/* Nút hành động */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/cart')}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Quay lại
        </button>
        <button
          onClick={handleConfirmPayment}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Xác nhận thanh toán
        </button>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;
