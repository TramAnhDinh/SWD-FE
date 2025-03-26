import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./OrderTracking.css";

const OrderTracking = () => {
  const { role } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [orderStages, setOrderStages] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Thêm state cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(20);

  // Tính toán các đơn hàng cho trang hiện tại
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // Hàm chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (role === "staff") {
      fetchOrders();
      fetchOrderStages();
    }
  }, [role]);

  const fetchOrders = async () => {
    try {
      const response = await axiosInstance.get("/Orders");
      if (response.data?.$values) {
        console.log("Orders data:", response.data.$values);
        setOrders(response.data.$values);
      } else {
        console.error("Dữ liệu không hợp lệ!");
      }
    } catch (err) {
      console.error("❌ Lỗi khi tải dữ liệu:", err);
      if (err.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  const fetchOrderStages = async () => {
    try {
      const response = await axiosInstance.get("/order-stages");
      if (response.data?.data?.$values) {
        setOrderStages(response.data.data.$values);
      }
    } catch (err) {
      console.error("❌ Lỗi khi tải trạng thái đơn hàng:", err);
      if (err.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  const getOrderStatusOptions = () => [
    { value: 0, label: "Chờ xử lý" },
    { value: 1, label: "Đã xác nhận" },
    { value: 2, label: "Đang giao" },
    { value: 3, label: "Hoàn thành" }
  ];

  const getPaymentStatusOptions = () => [
    { value: 4, label: "Đã thanh toán" },
    { value: 5, label: "Chưa thanh toán" }
  ];

  const getOrderStage = (orderId) => {
    // Tìm tất cả các stages của order này
    const stages = orderStages.filter(stage => stage.orderId === orderId);
    if (stages.length === 0) return "Chờ xử lý";
    
    // Lấy stage mới nhất không phải trạng thái thanh toán
    const latestStage = stages
      .filter(stage => !["Đã thanh toán", "Chưa thanh toán"].includes(stage.orderStageName))
      .sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate))[0];
    
    return latestStage ? latestStage.orderStageName : "Chờ xử lý";
  };

  const getPaymentStage = (orderId) => {
    // Tìm tất cả các stages của order này
    const stages = orderStages.filter(stage => stage.orderId === orderId);
    
    // Lấy stage thanh toán mới nhất
    const paymentStage = stages
      .filter(stage => ["Đã thanh toán", "Chưa thanh toán"].includes(stage.orderStageName))
      .sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate))[0];
    
    return paymentStage ? paymentStage.orderStageName : "Chưa thanh toán";
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

  const handleStatusChange = (orderId, newStatus) => {
    setSelectedStatus(prev => ({
      ...prev,
      [orderId]: newStatus
    }));
  };

  const handleUpdateStatus = async (orderId) => {
    const newStatus = selectedStatus[orderId];
    if (!newStatus) return;

    setLoading(true);
    setError(null);

    try {
      const currentOrder = orders.find(o => o.orderId === orderId);
      if (!currentOrder) {
        throw new Error("Không tìm thấy thông tin đơn hàng");
      }

      // Tạo stage mới
      const response = await axiosInstance.post("/order-stages", {
        orderId: orderId,
        orderStageName: getStatusLabel(newStatus),
        updatedDate: new Date().toISOString()
      });

      if (!response.data) {
        throw new Error("Không nhận được phản hồi từ server");
      }

      // Refresh order stages để lấy stage mới nhất
      await fetchOrderStages();
      
      // Reset selected status
      setSelectedStatus(prev => {
        const newStatus = { ...prev };
        delete newStatus[orderId];
        return newStatus;
      });

      alert("Cập nhật trạng thái thành công!");
    } catch (error) {
      console.error("Error updating order status:", error);
      setError("Không thể cập nhật trạng thái. Vui lòng thử lại!");
      alert("Có lỗi xảy ra khi cập nhật trạng thái!");
    } finally {
      setLoading(false);
    }
  };

  const getStatusLabel = (status) => {
    const option = getOrderStatusOptions().find(opt => opt.value === status);
    return option ? option.label : "Chờ xử lý";
  };

  const getPaymentStatusStyle = (orderId) => {
    const stages = orderStages.filter(stage => stage.orderId === orderId);
    const paymentStage = stages.find(stage => 
      stage.orderStageName === "Đã thanh toán" || stage.orderStageName === "Chưa thanh toán"
    );

    if (!paymentStage) return "bg-gray-100 text-gray-800 border-gray-200";
    
    switch (paymentStage.orderStageName) {
      case "Đã thanh toán":
        return "bg-green-100 text-green-800 border-green-200";
      case "Chưa thanh toán":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPaymentStatusText = (orderId) => {
    const stages = orderStages.filter(stage => stage.orderId === orderId);
    const paymentStage = stages.find(stage => 
      stage.orderStageName === "Đã thanh toán" || stage.orderStageName === "Chưa thanh toán"
    );

    if (!paymentStage) return "Chưa xác định";
    return paymentStage.orderStageName;
  };

  const handleUpdatePaymentStatus = async (orderId, newStatus) => {
    setLoading(true);
    setError(null);

    try {
      // Tạo stage mới cho trạng thái thanh toán
      const response = await axiosInstance.post("/order-stages", {
        orderId: orderId,
        orderStageName: newStatus === 4 ? "Đã thanh toán" : "Chưa thanh toán",
        updatedDate: new Date().toISOString()
      });

      if (!response.data) {
        throw new Error("Không nhận được phản hồi từ server");
      }

      // Refresh order stages để lấy stage mới nhất
      await fetchOrderStages();
      
      // Reset selected status
      setSelectedStatus(prev => {
        const newStatus = { ...prev };
        delete newStatus[orderId];
        return newStatus;
      });

      alert("Cập nhật trạng thái thanh toán thành công!");
    } catch (error) {
      console.error("Error updating payment status:", error);
      setError("Không thể cập nhật trạng thái thanh toán. Vui lòng thử lại!");
      alert("Có lỗi xảy ra khi cập nhật trạng thái thanh toán!");
    } finally {
      setLoading(false);
    }
  };

  if (role !== "staff") return <h1 className="error">⚠ Bạn không có quyền truy cập</h1>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">📦 Danh Sách Đơn Hàng</h1>
          </div>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-4 mt-4">
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
          )}

          {orders.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày Đặt</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Người Nhận</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Địa Chỉ</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phương Thức Giao</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số Lượng</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng Tiền</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số điện thoại</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái đơn</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái thanh toán</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cập nhật</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chi Tiết</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentOrders.map((order) => (
                      <tr key={order.orderId} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderId}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(order.orderDate)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.recipientName}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{order.deliveryAddress}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.shippingMethod}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Intl.NumberFormat('vi-VN').format(order.price)} VND</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{new Intl.NumberFormat('vi-VN').format(order.totalPrice)} VND</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.notes || "N/A"}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStageStyle(getOrderStage(order.orderId))}`}>
                            {getOrderStage(order.orderId)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStageStyle(getPaymentStage(order.orderId))}`}>
                            {getPaymentStage(order.orderId)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <select
                              className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              value={selectedStatus[order.orderId] || ""}
                              onChange={(e) => handleStatusChange(order.orderId, Number(e.target.value))}
                              disabled={loading}
                            >
                              <option value="">Chọn trạng thái</option>
                              <optgroup label="Trạng thái đơn hàng">
                                {getOrderStatusOptions().map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </optgroup>
                              <optgroup label="Trạng thái thanh toán">
                                {getPaymentStatusOptions().map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </optgroup>
                            </select>
                            {selectedStatus[order.orderId] && (
                              <button
                                className={`bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => handleUpdateStatus(order.orderId)}
                                disabled={loading}
                              >
                                {loading ? 'Đang cập nhật...' : 'Cập nhật'}
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button 
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={() => navigate(`/order-detail/${order.orderId}`)}
                          >
                            Chi tiết
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Phân trang */}
              <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-700">
                      Hiển thị <span className="font-medium">{indexOfFirstOrder + 1}</span> đến{" "}
                      <span className="font-medium">
                        {Math.min(indexOfLastOrder, orders.length)}
                      </span>{" "}
                      trong tổng số <span className="font-medium">{orders.length}</span> đơn hàng
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                        currentPage === 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Trước
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                          currentPage === index + 1
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                        currentPage === totalPages
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Sau
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="px-6 py-4 text-center text-gray-500">
              <p className="text-lg">🚫 Không có đơn hàng nào.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
