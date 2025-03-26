import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    const handlePaymentCallback = async () => {
      try {
        // Lấy các thông tin từ VNPAY callback URL
        const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
        const vnp_TransactionStatus = searchParams.get('vnp_TransactionStatus');
        const vnp_TxnRef = searchParams.get('vnp_TxnRef'); // OrderId
        const vnp_Amount = searchParams.get('vnp_Amount');
        const vnp_OrderInfo = searchParams.get('vnp_OrderInfo');
        const vnp_PayDate = searchParams.get('vnp_PayDate');
        const vnp_BankCode = searchParams.get('vnp_BankCode');
        const vnp_BankTranNo = searchParams.get('vnp_BankTranNo');

        if (!vnp_TxnRef) {
          throw new Error('Không tìm thấy thông tin đơn hàng');
        }

        // Kiểm tra trạng thái thanh toán từ VNPAY
        const isPaymentSuccess = vnp_ResponseCode === '00' && vnp_TransactionStatus === '00';

        if (isPaymentSuccess) {
          // Nếu thanh toán thành công, tạo stage mới với trạng thái "Purchased"
          const stageData = {
            orderId: parseInt(vnp_TxnRef),
            orderStageName: "Purchased",
            updatedDate: new Date().toISOString()
          };
          
          try {
            await axiosInstance.post("/order-stages", stageData);
            console.log("Created order stage:", stageData);
            setStatus('success');
          } catch (stageError) {
            console.error("Error creating order stage:", stageError);
            throw stageError;
          }

          // Lưu thông tin thanh toán
          const paymentData = {
            orderId: parseInt(vnp_TxnRef),
            amount: parseInt(vnp_Amount) / 100, // VNPAY trả về số tiền * 100
            bankCode: vnp_BankCode,
            bankTransactionNo: vnp_BankTranNo,
            paymentDate: vnp_PayDate,
            transactionStatus: vnp_TransactionStatus,
            orderInfo: vnp_OrderInfo
          };

          try {
            await axiosInstance.post("/payment/save", paymentData);
            console.log("Saved payment info:", paymentData);
          } catch (paymentError) {
            console.error("Error saving payment info:", paymentError);
            // Không throw error ở đây vì stage đã được tạo thành công
          }
          
          // Chuyển hướng về trang member sau 2 giây
          setTimeout(() => {
            navigate('/member', {
              state: {
                orderId: parseInt(vnp_TxnRef),
                paymentStatus: 'success',
                paymentInfo: {
                  amount: parseInt(vnp_Amount) / 100,
                  bankCode: vnp_BankCode,
                  paymentDate: vnp_PayDate
                }
              }
            });
          }, 2000);
        } else {
          // Nếu thanh toán thất bại
          const stageData = {
            orderId: parseInt(vnp_TxnRef),
            orderStageName: "Payment Failed",
            updatedDate: new Date().toISOString()
          };
          
          try {
            await axiosInstance.post("/order-stages", stageData);
            console.log("Created failed payment stage:", stageData);
          } catch (stageError) {
            console.error("Error creating failed payment stage:", stageError);
          }
          
          setStatus('failed');
          
          // Chuyển hướng về trang member sau 2 giây
          setTimeout(() => {
            navigate('/member', {
              state: {
                orderId: parseInt(vnp_TxnRef),
                paymentStatus: 'failed',
                errorCode: vnp_ResponseCode
              }
            });
          }, 2000);
        }
      } catch (error) {
        console.error('Error handling payment callback:', error);
        setStatus('error');
      }
    };

    handlePaymentCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        {status === 'processing' && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg font-semibold text-gray-700">Đang xử lý thanh toán...</p>
            <p className="text-gray-600 mt-2">Vui lòng không đóng trang này</p>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <p className="text-lg font-semibold text-gray-700">Thanh toán thành công!</p>
            <p className="text-gray-600 mt-2">Cảm ơn bạn đã thanh toán</p>
            <p className="text-gray-600 mt-2">Đang chuyển hướng...</p>
          </div>
        )}

        {status === 'failed' && (
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">✕</div>
            <p className="text-lg font-semibold text-gray-700">Thanh toán thất bại</p>
            <p className="text-gray-600 mt-2">Vui lòng thử lại sau</p>
            <p className="text-gray-600 mt-2">Đang chuyển hướng...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠</div>
            <p className="text-lg font-semibold text-gray-700">Có lỗi xảy ra</p>
            <p className="text-gray-600 mt-2">Không thể xử lý thanh toán</p>
            <button
              onClick={() => navigate('/member')}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Quay lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentCallback; 