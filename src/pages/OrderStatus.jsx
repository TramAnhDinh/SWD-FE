import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const OrderStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const orderId = location.state?.orderId;
        if (!orderId) {
          setError("Không tìm thấy thông tin đơn hàng");
          setLoading(false);
          return;
        }

        const response = await axiosInstance.get(`/Orders/${orderId}`);
        setOrder(response.data);
      } catch (err) {
        console.error("Lỗi khi lấy thông tin đơn hàng:", err);
        setError("Không thể tải thông tin đơn hàng");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderStatus();
  }, [location.state?.orderId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải thông tin đơn hàng...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => navigate("/profile")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">🎉 Đặt hàng thành công!</h2>
            <p className="mt-2 text-gray-600">Cảm ơn bạn đã đặt hàng tại cửa hàng chúng tôi</p>
          </div>

          <div className="px-6 py-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Thông tin đơn hàng</h3>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Mã đơn hàng:</span> {order?.orderId}</p>
                  <p><span className="font-medium">Ngày đặt:</span> {new Date(order?.orderDate).toLocaleString('vi-VN')}</p>
                  <p><span className="font-medium">Tổng tiền:</span> {order?.totalPrice?.toLocaleString('vi-VN')} VND</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Thông tin giao hàng</h3>
                <div className="mt-2 space-y-2">
                  <p><span className="font-medium">Người nhận:</span> {order?.recipientName}</p>
                  <p><span className="font-medium">Địa chỉ:</span> {order?.deliveryAddress}</p>
                  <p><span className="font-medium">Phương thức giao:</span> {order?.shippingMethod}</p>
                  <p><span className="font-medium">Phương thức thanh toán:</span> {order?.paymentMethod === "online" ? "Thanh toán online" : "Thanh toán khi nhận hàng"}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Trạng thái đơn hàng</h3>
                <div className="mt-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                      ✓
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-green-600">Đơn hàng đã được xác nhận</p>
                      <p className="text-sm text-gray-500">Chúng tôi sẽ xử lý đơn hàng của bạn sớm nhất có thể</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Tiếp tục mua sắm
              </button>
              <button
                onClick={() => navigate("/member")}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Xem đơn hàng của tôi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
