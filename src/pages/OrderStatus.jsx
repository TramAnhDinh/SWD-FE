import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetOrder } from '../redux/slices/orderSlice';

const OrderStatus = () => {
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!order.status) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">🚫 Không có đơn hàng nào</h2>
        <p className="text-lg text-gray-600 mb-6">Bạn chưa đặt hàng. Hãy quay lại giỏ hàng và thử lại.</p>
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
      <h2 className="text-3xl font-bold mb-4 text-green-600">🎉 Đặt hàng thành công!</h2>
      <p className="text-lg text-gray-700 mb-6">
        Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được xử lý.
      </p>
      <p className="text-md text-gray-600 mb-6">Mã đơn hàng: {order.orderDetails?.id ?? 'N/A'}</p>
      <button
        onClick={() => {
          dispatch(resetOrder());
          navigate('/');
        }}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        🏠 Về trang chủ
      </button>
    </div>
  );
};

export default OrderStatus;
