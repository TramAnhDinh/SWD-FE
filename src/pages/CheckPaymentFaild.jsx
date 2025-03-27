import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimesCircle, FaHome, FaShoppingCart } from 'react-icons/fa';

const CheckPaymentFailed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Tự động chuyển hướng sau 5 giây
    const timer = setTimeout(() => {
      navigate('/cart');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <FaTimesCircle className="text-red-500 text-8xl animate-bounce" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Thanh Toán Thất Bại
          </h1>
          
          <p className="text-gray-600 mb-8">
            Rất tiếc, quá trình thanh toán của bạn không thành công. Vui lòng kiểm tra lại thông tin và thử lại.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/cart')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Quay Lại Giỏ Hàng
            </button>

            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <FaHome />
              Về Trang Chủ
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Tự động chuyển hướng sau 5 giây...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckPaymentFailed;