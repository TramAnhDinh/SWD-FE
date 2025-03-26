import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosInstance from "../utils/axiosInstance";
import OrderList from "../components/OrderList";

const ProfilePage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    fullName: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    gender: user?.gender ? "true" : "false",
    address: user?.address || ""
  });

  console.log("Current user state:", user);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get("/users/profile");
        if (response.data?.data) {
          setProfile(response.data.data);
          setEditData({
            userId: response.data.data.userId ?? 0,
            username: response.data.data.username || "",
            fullName: response.data.data.fullName || "",
            gender: response.data.data.gender ? "true" : "false",
            dateOfBirth: response.data.data.dateOfBirth ? response.data.data.dateOfBirth.split("T")[0] : "",
            address: response.data.data.address || "",
            phone: response.data.data.phone || "",
            email: response.data.data.email || "",
            avatar: response.data.data.avatar || "",
            isDeleted: response.data.data.isDeleted ?? false,
            roleId: response.data.data.roleId ?? 3,
          });
        }
      } catch (err) {
        console.error("Lỗi khi lấy thông tin profile:", err);
        setError("Không thể tải thông tin profile");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await axiosInstance.put("/users/profile", editData);
      if (response.data?.data) {
        setProfile(response.data.data);
        setIsEditing(false);
        alert("Cập nhật thông tin thành công!");
      }
    } catch (err) {
      console.error("Lỗi khi cập nhật profile:", err);
      alert("Không thể cập nhật thông tin");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-8 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl text-blue-500 font-bold">
                  {profile?.fullName?.[0]?.toUpperCase() || user.displayName?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profile?.fullName || user.displayName || "Chưa cập nhật"}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
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
              <div className="space-y-6">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                        <input
                          type="text"
                          name="fullName"
                          value={editData.fullName}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                        <input
                          type="tel"
                          name="phone"
                          value={editData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Giới tính</label>
                        <select
                          name="gender"
                          value={editData.gender}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="true">Nam</option>
                          <option value="false">Nữ</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                      <input
                        type="text"
                        name="address"
                        value={editData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Hủy
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                      >
                        Lưu thay đổi
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Họ và tên</h3>
                        <p className="mt-1 text-sm text-gray-900">{profile?.fullName || "Chưa cập nhật"}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <p className="mt-1 text-sm text-gray-900">{profile?.email || "Chưa cập nhật"}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Số điện thoại</h3>
                        <p className="mt-1 text-sm text-gray-900">{profile?.phone || "Chưa cập nhật"}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Giới tính</h3>
                        <p className="mt-1 text-sm text-gray-900">{profile?.gender ? "Nam" : "Nữ"}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Địa chỉ</h3>
                      <p className="mt-1 text-sm text-gray-900">{profile?.address || "Chưa cập nhật"}</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                      >
                        Chỉnh sửa thông tin
                      </button>
                    </div>
                  </div>
                )}
                <div className="pt-4 border-t border-gray-200">
      <button
        onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
      >
        Đăng xuất
      </button>
                </div>
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

export default ProfilePage;
