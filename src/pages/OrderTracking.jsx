import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OrderTracking = () => {
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();

  if (!order.status || !order.orderDetails) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">🚫 Không tìm thấy đơn hàng</h2>
        <p className="text-lg text-gray-600 mb-6">Vui lòng kiểm tra lại hoặc đặt hàng mới.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          🏠 Về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-600">📦 Theo dõi đơn hàng</h2>
      <p className="text-lg text-gray-700 mb-4">Mã đơn hàng: <strong>{order.orderDetails.id}</strong></p>
      <p className="text-md text-gray-600 mb-6">Tình trạng: <span className="font-semibold">{order.orderDetails.status}</span></p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        🏠 Về trang chủ
      </button>
    </div>
  );
};

export default OrderTracking;
