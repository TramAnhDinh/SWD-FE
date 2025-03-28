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

  const handleConfirmPayment = async () => {
    if (!orderData.name || !orderData.address || !orderData.phone) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const orderPayload = {
      recipientName: orderData.name,
      deliveryAddress: orderData.address,
      phone: orderData.phone,
      totalPrice: totalPrice,
      orderDetails: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/Orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error(`Lỗi API: ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ Đơn hàng đã tạo thành công:", result);
      dispatch(clearCart());
      alert("🎉 Đặt hàng thành công!");
      navigate(`/order-tracking?orderId=${result.orderId}`);
    } catch (error) {
      console.error("❌ Lỗi khi đặt hàng:", error);
      alert("Lỗi khi gửi đơn hàng. Vui lòng thử lại!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Xác nhận thanh toán</h2>

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

      <div className="mt-4">
        <h3 className="text-lg font-bold">Tổng tiền: {totalPrice.toLocaleString()} VND</h3>
      </div>

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
