import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

const CheckoutConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart } from '../redux/slices/cartSlice';

// const CheckoutConfirmation = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Lấy tổng tiền từ Redux store (giỏ hàng)
//   const cartTotal = useSelector((state) => state.cart.totalPrice);

//   // State lưu thông tin đơn hàng
//   const [orderData, setOrderData] = useState({
//     name: '',
//     address: '',
//     phone: '',
//     totalPrice: cartTotal || 0, // Gán tổng tiền ban đầu
//   });

//   // Cập nhật giá trị input
//   const handleChange = (e) => {
//     setOrderData({ ...orderData, [e.target.name]: e.target.value });
//   };

//   const handleConfirmPayment = () => {
//     if (!orderData.name || !orderData.address || !orderData.phone) {
//       alert('Vui lòng nhập đầy đủ thông tin!');
//       return;
//     }

//     // Tạo mã đơn hàng ngẫu nhiên
//     const order = {
//       id: 'DH' + Math.floor(Math.random() * 1000000),
//       ...orderData,
//       status: 'Đang xử lý',
//     };

//     // Lưu đơn hàng vào localStorage
//     localStorage.setItem('latestOrder', JSON.stringify(order));

//     dispatch(clearCart()); // Xóa giỏ hàng sau khi thanh toán thành công
//     alert('Thanh toán thành công!');
//     navigate('/order-tracking'); // Chuyển đến trang theo dõi đơn hàng
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
//         <div>
//           <label className="block font-semibold">Tổng tiền:</label>
//           <p className="border p-2 w-full bg-gray-100">{orderData.totalPrice.toLocaleString()} VND</p>
//         </div>
//       </form>

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
//         >
//           Xác nhận thanh toán
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutConfirmation;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart } from '../redux/slices/cartSlice';

// const CheckoutConfirmation = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Lấy thông tin từ Redux store
//   const cartTotal = useSelector((state) => state.cart?.totalPrice ?? 0);
//   const cartItems = useSelector((state) => state.cart?.items ?? []);

//   console.log("Cart Items:", cartItems);
//   console.log("Cart Total:", cartTotal);

//   // State lưu thông tin đơn hàng
//   const [orderData, setOrderData] = useState({
//     recipientName: '',
//     deliveryAddress: '',
//     phone: '',
//     totalPrice: cartTotal,
//     shippingMethod: 'Standard Shipping',
//     shippingFee: 30,
//     notes: '',
//     quantity: cartItems.length,
//     price: cartTotal,
//     customizeProduct: {
//       productId: 1,
//       userId: 3,
//       shirtColor: 'Blue',
//       fullImage: null,
//       description: 'Grey shirt with unique pattern',
//       price: cartTotal,
//       designElements: [],
//     }
//   });

//   // Cập nhật totalPrice khi Redux store thay đổi
//   useEffect(() => {
//     setOrderData((prevData) => ({
//       ...prevData,
//       totalPrice: cartTotal,
//       price: cartTotal,
//       quantity: cartItems.length,
//       customizeProduct: { ...prevData.customizeProduct, price: cartTotal }
//     }));
//   }, [cartTotal, cartItems]);

//   // Cập nhật giá trị input
//   const handleChange = (e) => {
//     setOrderData({ ...orderData, [e.target.name]: e.target.value });
//   };

//   const handleConfirmPayment = async () => {
//     if (!orderData.recipientName || !orderData.deliveryAddress || !orderData.phone) {
//       alert('Vui lòng nhập đầy đủ thông tin!');
//       return;
//     }

//     const newOrder = {
//       orderDate: new Date().toISOString(),
//       deliveryDate: new Date().toISOString(),
//       recipientName: orderData.recipientName,
//       deliveryAddress: orderData.deliveryAddress,
//       shippingMethod: orderData.shippingMethod,
//       shippingFee: orderData.shippingFee,
//       notes: orderData.notes,
//       totalPrice: orderData.totalPrice,
//       quantity: orderData.quantity,
//       price: orderData.price,
//       customizeProduct: orderData.customizeProduct,
//       orderStages: [],
//       payments: [],
//     };

//     try {
//       const response = await fetch('https://localhost:7163/api/Orders', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newOrder),
//       });

//       if (response.ok) {
//         dispatch(clearCart());
//         alert('Thanh toán thành công!');
//         navigate('/order-tracking');
//       } else {
//         alert('Thanh toán thất bại, vui lòng thử lại!');
//       }
//     } catch (error) {
//       console.error('Lỗi khi gửi đơn hàng:', error);
//       alert('Lỗi hệ thống, vui lòng thử lại sau!');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-6 text-center text-red-500">Xác nhận thanh toán</h2>

//       <form className="space-y-4">
//         <div>
//           <label className="block font-semibold">Họ và tên:</label>
//           <input type="text" name="recipientName" value={orderData.recipientName} onChange={handleChange} className="border p-2 w-full" required />
//         </div>
//         <div>
//           <label className="block font-semibold">Địa chỉ giao hàng:</label>
//           <input type="text" name="deliveryAddress" value={orderData.deliveryAddress} onChange={handleChange} className="border p-2 w-full" required />
//         </div>
//         <div>
//           <label className="block font-semibold">Số điện thoại:</label>
//           <input type="text" name="phone" value={orderData.phone} onChange={handleChange} className="border p-2 w-full" required />
//         </div>
//         <div>
//           <label className="block font-semibold">Ghi chú:</label>
//           <textarea name="notes" value={orderData.notes} onChange={handleChange} className="border p-2 w-full" />
//         </div>
//         <div>
//           <label className="block font-semibold">Tổng tiền:</label>
//           <p className="border p-2 w-full bg-gray-100 text-lg font-semibold">
//             {orderData.totalPrice.toLocaleString()} VND
//           </p>
//         </div>
//       </form>

//       <div className="flex gap-4 mt-6">
//         <button onClick={() => navigate('/cart')} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition">
//           Quay lại
//         </button>
//         <button onClick={handleConfirmPayment} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
//           Xác nhận thanh toán
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutConfirmation;

