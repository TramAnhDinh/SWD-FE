import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaShoppingBag } from 'react-icons/fa';
import { clearCart } from '../redux/slices/cartSlice';

const CheckPaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Xóa giỏ hàng sau khi thanh toán thành công
    dispatch(clearCart());
    // Tự động chuyển hướng sau 5 giây
    const timer = setTimeout(() => {
      navigate('/member');
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <FaCheckCircle className="text-green-500 text-8xl animate-bounce" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Thanh Toán Thành Công!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được xử lý và sẽ được giao sớm nhất có thể.
          </p>

          <div className="space-y-4">
            {/* <button
              onClick={() => navigate('/member')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaShoppingBag />
              Xem Đơn Hàng
            </button> */}

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

export default CheckPaymentSuccess;