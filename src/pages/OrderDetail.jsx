import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
// import "./OrderDetail.css";

const OrderDetail = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);
  const [customizeProduct, setCustomizeProduct] = useState(null);
  const [orderStages, setOrderStages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrderDetails();
    fetchOrderStages();
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const orderResponse = await axiosInstance.get(`/orders/${orderId}`);
      console.log("Order Response Data:", orderResponse.data);

      if (orderResponse.data) {
        const orderData = orderResponse.data;

        // Lấy thông tin customize product
        try {
          const customizeResponse = await axiosInstance.get(`/customizeproducts/${orderData.customizeProductId}`);
          console.log("Customize Product Response:", customizeResponse.data);

          // Kết hợp dữ liệu từ cả order và customize product
          const enrichedOrder = {
            ...orderData,
            productName: customizeResponse.data?.product?.productName || "N/A",
            description: customizeResponse.data?.description || "",
            customDescription: customizeResponse.data?.description || "",
            shirtColor: orderData.shirtColor || customizeResponse.data?.shirtColor || "N/A",
            customizeProduct: customizeResponse.data
          };

          console.log("Enriched Order:", enrichedOrder);
          setOrder(enrichedOrder);
          setCustomizeProduct(enrichedOrder.customizeProduct);
        } catch (customizeErr) {
          console.error("Error fetching customize product:", customizeErr);
          setOrder({
            ...orderData,
            productName: "N/A",
            description: orderData.description || "",
            customDescription: "",
            shirtColor: orderData.shirtColor || "N/A",
            customizeProduct: null
          });
        }
      }
    } catch (err) {
      console.error("Error fetching order details:", err);
      setError("Không thể tải thông tin đơn hàng");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderStages = async () => {
    try {
      const response = await axiosInstance.get("/order-stages");
      if (response.data?.data?.$values) {
        const orderStages = response.data.data.$values.filter(
          stage => stage.orderId === Number(orderId)
        );
        setOrderStages(orderStages.sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate)));
      }
    } catch (err) {
      console.error("Error fetching order stages:", err);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getStageStyle = (stage) => {
    switch (stage) {
      case "Chờ xử lý":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Đã xác nhận":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Đang giao":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Hoàn thành":
        return "bg-green-100 text-green-800 border-green-200";
      case "Đã thanh toán":
        return "bg-green-100 text-green-800 border-green-200";
      case "Chưa thanh toán":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.jpg";
    if (imagePath.startsWith("http")) return imagePath;
    return `https://phamdangtuc-001-site1.ntempurl.com/uploads/${imagePath.split("\\").pop()}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải thông tin đơn hàng...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600">Không tìm thấy thông tin đơn hàng</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Chi Tiết Đơn Hàng #{order?.orderId}</h1>
              <button
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Order Information */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Thông Tin Người Đặt</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Tên:</span> {order?.recipientName}</p>
                  <p><span className="font-medium">Địa chỉ:</span> {order?.deliveryAddress}</p>
                  <p><span className="font-medium">Số điện thoại:</span> {order?.notes || "N/A"}</p>
                  <p><span className="font-medium">Ngày đặt:</span> {formatDate(order?.orderDate)}</p>
                  <p><span className="font-medium">Ngày giao:</span> {formatDate(order?.deliveryDate)}</p>
                </div>
              </div>

              {/* Order Status */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Trạng Thái Đơn Hàng</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Trạng thái hiện tại:</span>{" "}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStageStyle(orderStages[0]?.orderStageName)}`}>
                      {orderStages[0]?.orderStageName || "Chờ xử lý"}
                    </span>
                  </p>
                  <p><span className="font-medium">Phương thức giao:</span> {order?.shippingMethod}</p>
                  <p><span className="font-medium">Phí vận chuyển:</span> {new Intl.NumberFormat('vi-VN').format(order?.shippingFee)} VND</p>
                </div>
              </div>

              {/* Product Information */}
              <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Chi Tiết Sản Phẩm</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="md:w-1/3">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={getImageUrl(customizeProduct?.fullImage)}
                        alt={customizeProduct?.description}
                        className="w-full h-64 object-contain rounded-lg shadow-md"
                        onError={(e) => {
                          e.target.src = "/placeholder.jpg";
                        }}
                      />
                    </div>
                  </div>
                  {/* Product Details */}
                  <div className="md:w-2/3 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Sản phẩm tùy chỉnh</h3>
                      <div className="mt-2 space-y-2">
                        <p className="text-gray-600">
                          <span className="font-medium">Tên sản phẩm:</span> {order.productName || "N/A"}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Mô tả:</span> {order.description || "N/A"}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Mô tả tùy chỉnh:</span> {order.customDescription || "N/A"}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Màu áo:</span> {order.shirtColor || "N/A"}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Số lượng:</span> {order.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Giá</p>
                        <p className="text-lg font-semibold text-gray-900">{new Intl.NumberFormat('vi-VN').format(order?.price)} VND</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tổng tiền</p>
                        <p className="text-lg font-semibold text-red-600">{new Intl.NumberFormat('vi-VN').format(order?.totalPrice)} VND</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order History */}
              <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Lịch Sử Đơn Hàng</h2>
                <div className="space-y-4">
                  {orderStages.map((stage, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStageStyle(stage.orderStageName)}`}>
                          <span className="text-sm font-medium">{index + 1}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{stage.orderStageName}</p>
                        <p className="text-sm text-gray-500">{formatDate(stage.updatedDate)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
