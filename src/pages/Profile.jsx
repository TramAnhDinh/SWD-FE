import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAndClearCart } from "../redux/slices/userSlice";
import OrderList from "../components/OrderList";

const Profile = () => {
  const { username, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const handleLogout = () => {
    dispatch(logoutAndClearCart());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Tài khoản của tôi</h1>
            <p className="text-gray-600">Xin chào, {username}</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "profile"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Thông tin cá nhân
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "orders"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Đơn hàng của tôi
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === "profile" ? (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Thông tin tài khoản</h2>
                  <div className="mt-2 space-y-2">
                    <p><span className="font-medium">Tên đăng nhập:</span> {username}</p>
                    <p><span className="font-medium">Vai trò:</span> {role === "member" ? "Thành viên" : "Quản trị viên"}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Lịch sử đơn hàng</h2>
                <OrderList />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 