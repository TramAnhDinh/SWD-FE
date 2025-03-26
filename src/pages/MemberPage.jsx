import React, { useEffect, useState } from "react";
import "./memberPage.css";
import axiosInstance from "../utils/axiosInstance";

const MemberPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [activeTab, setActiveTab] = useState("profile");
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState(null);

  useEffect(() => {
    fetchProfile();
    if (activeTab === "orders") {
      fetchOrders();
    }
  }, [activeTab]);

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Bạn chưa đăng nhập!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/profile", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error(`Lỗi API: ${response.status}`);
      
      const data = await response.json();
      if (!data?.data) throw new Error("Dữ liệu API không hợp lệ!");
      
      setProfile(data.data);
      setEditData({
        userId: data.data.userId ?? 0,
        username: data.data.username || "",
        fullName: data.data.fullName || "",
        gender: data.data.gender ? "true" : "false",
        dateOfBirth: data.data.dateOfBirth ? data.data.dateOfBirth.split("T")[0] : "",
        address: data.data.address || "",
        phone: data.data.phone || "",
        email: data.data.email || "",
        avatar: data.data.avatar || "",
        isDeleted: data.data.isDeleted ?? false,
        roleId: data.data.roleId ?? 3,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    setOrdersLoading(true);
    try {
      const response = await axiosInstance.get("/Orders/user");
      setOrders(response.data);
    } catch (err) {
      setOrdersError("Không thể tải lịch sử đơn hàng");
      console.error("Lỗi khi tải đơn hàng:", err);
    } finally {
      setOrdersLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "chờ xử lý":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "đã xác nhận":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "đang giao":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "đã giao":
        return "bg-green-100 text-green-800 border-green-200";
      case "đã hủy":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Bạn chưa đăng nhập!");
      return;
    }

    const formattedData = {
      userId: editData.userId || profile.userId,
      username: editData.username.trim(),
      fullName: editData.fullName.trim(),
      gender: editData.gender === "true",
      dateOfBirth: editData.dateOfBirth ? new Date(editData.dateOfBirth).toISOString() : null,
      address: editData.address.trim(),
      phone: editData.phone.trim(),
      email: editData.email.trim(),
      avatar: editData.avatar,
      isDeleted: editData.isDeleted,
      roleId: editData.roleId,
    };

    try {
      const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setError(`Lỗi API: ${errorResponse.message || response.status}`);
        return;
      }

      const updatedData = await response.json();
      if (!updatedData.data || !updatedData.data.userId) {
        setError("Dữ liệu API không hợp lệ!");
        return;
      }
      
      setProfile(updatedData.data);
      setIsEditing(false);
      alert("Cập nhật thành công!");
    } catch (err) {
      setError("Lỗi kết nối API: " + err.message);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Đang tải dữ liệu...</p>;
  if (error) return <p className="text-center text-red-500">Lỗi: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-6">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "profile"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Thông tin cá nhân
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === "orders"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("orders")}
            >
              Lịch sử đơn hàng
            </button>
          </div>
        </div>

        {activeTab === "profile" ? (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Thông tin cá nhân</h2>
            {isEditing ? (
              <div className="space-y-4">
                {[
                  { label: "Họ và tên", name: "fullName", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Số điện thoại", name: "phone", type: "text" },
                  { label: "Ngày sinh", name: "dateOfBirth", type: "date" }
                ].map(({ label, name, type }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-gray-700">{label}</label>
                    <input 
                      type={type}
                      name={name}
                      value={editData[name] || ""}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" 
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Giới tính</label>
                  <select 
                    name="gender" 
                    value={editData.gender} 
                    onChange={handleChange} 
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200"
                  >
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Lưu</button>
                  <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg">Hủy</button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {profile && (
                  <>
                    <p><strong>Họ và tên:</strong> {profile.fullName}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Số điện thoại:</strong> {profile.phone}</p>
                    <p><strong>Giới tính:</strong> {profile.gender ? "Nam" : "Nữ"}</p>
                  </>
                )}
                <button onClick={() => setIsEditing(true)} className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg">
                  Chỉnh sửa
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Lịch sử đơn hàng</h2>
            {ordersLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-2 text-gray-600">Đang tải đơn hàng...</p>
              </div>
            ) : ordersError ? (
              <div className="text-center py-4 text-red-500">{ordersError}</div>
            ) : orders.length === 0 ? (
              <div className="text-center py-4 text-gray-600">
                Bạn chưa có đơn hàng nào
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mã đơn hàng
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày đặt
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Người nhận
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Địa chỉ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tổng tiền
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.orderId}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.orderId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatDate(order.orderDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.recipientName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.deliveryAddress}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.totalPrice?.toLocaleString('vi-VN')} VND
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {order.status || "Chờ xử lý"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberPage;
