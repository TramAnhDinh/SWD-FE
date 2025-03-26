import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const PaymentCallback = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('processing'); // processing, success, failed, error

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log("Bắt đầu xử lý callback");
        
        // Lấy các tham số từ URL
        const params = new URLSearchParams(window.location.search);
        const vnp_ResponseCode = params.get('vnp_ResponseCode');
        const orderId = params.get('vnp_TxnRef');

        console.log("VNPAY Response Code:", vnp_ResponseCode);
        
        // Kiểm tra response code từ VNPAY
        if (vnp_ResponseCode === '00') {
          console.log("Thanh toán thành công, cập nhật trạng thái");
          // Tạo order stage "Đã thanh toán"
          const stageData = {
            orderId: orderId,
            orderStageName: "Đã thanh toán",
            updatedDate: new Date().toISOString()
          };
          
          await axiosInstance.post("/order-stages", stageData);
          setStatus('success');
          
          // Chuyển hướng sau 2 giây
          setTimeout(() => {
            window.location.href = "https://swd-fe-nine.vercel.app/member";
          }, 2000);
        } else {
          console.log("Thanh toán thất bại, cập nhật trạng thái");
          // Xử lý khi thanh toán thất bại
          const stageData = {
            orderId: orderId,
            orderStageName: "Thanh toán thất bại",
            updatedDate: new Date().toISOString()
          };
          
          await axiosInstance.post("/order-stages", stageData);
          setStatus('failed');

          // Chuyển hướng sau 2 giây
          setTimeout(() => {
            window.location.href = "https://swd-fe-nine.vercel.app/member";
          }, 2000);
        }
      } catch (error) {
        console.error("Lỗi khi xử lý callback:", error);
        setStatus('error');
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center">
          {status === 'processing' && (
            <>
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-lg font-semibold text-gray-700">Đang xử lý kết quả thanh toán...</p>
              <p className="text-gray-600 mt-2">Vui lòng không tắt trình duyệt</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <p className="text-lg font-semibold text-gray-700">Thanh toán thành công!</p>
              <p className="text-gray-600 mt-2">Đang chuyển hướng về trang đơn hàng...</p>
            </>
          )}

          {status === 'failed' && (
            <>
              <div className="text-red-500 text-6xl mb-4">✕</div>
              <p className="text-lg font-semibold text-gray-700">Thanh toán thất bại</p>
              <p className="text-gray-600 mt-2">Đang chuyển hướng về trang đơn hàng...</p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="text-red-500 text-6xl mb-4">⚠</div>
              <p className="text-lg font-semibold text-gray-700">Có lỗi xảy ra</p>
              <p className="text-gray-600 mt-2">Không thể xử lý thanh toán</p>
              <button
                onClick={() => navigate('/member')}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Quay lại trang đơn hàng
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentCallback; 