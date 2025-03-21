import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderTracking = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("latestOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-500">🚫 Không tìm thấy đơn hàng</h2>
        <p className="text-gray-600 mt-2">Vui lòng kiểm tra lại hoặc đặt hàng mới.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          🏠 Về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">📦 Chi tiết đơn hàng</h2>
      <div className="border p-4 rounded shadow">
        <p><strong>Mã đơn hàng:</strong> {order.id}</p>
        <p><strong>Họ tên:</strong> {order.name}</p>
        <p><strong>Địa chỉ:</strong> {order.address}</p>
        <p><strong>Số điện thoại:</strong> {order.phone}</p>
        {/* <p><strong>Tổng tiền:</strong> {order.totalPrice} VND</p> */}
        <p><strong>Trạng thái:</strong> {order.status}</p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition block mx-auto"
      >
        🏠 Về trang chủ
      </button>
    </div>
  );
};

export default OrderTracking;
