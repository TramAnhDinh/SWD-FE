import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";
import { loadUserCart } from "../redux/slices/cartSlice";
import axiosInstance from "../utils/axiosInstance";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/users/login", {
        username,
        password,
      });

      console.log("Login response:", response.data);
      
      if (!response.data) {
        throw new Error("Invalid response format");
      }

      const token = response.data;
      
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      
      const role = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      
      dispatch(setUser({ token, role, username }));
      dispatch(loadUserCart());
      
      if (role === "staff") {
        navigate("/order-tracking");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    } finally {
      setLoading(false);
    }
  };

  // Xử lý đổi mật khẩu
  const handleResetPassword = async () => {
    if (!username) {
      setError("Vui lòng nhập tên đăng nhập.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/change-password", {
        username,
        password: newPassword,
        confirmPassword,
      });

      if (response.data.success) {
        alert("Mật khẩu đã được cập nhật thành công!");
        setShowResetModal(false);
      } else {
        throw new Error(response.data.message || "Cập nhật mật khẩu thất bại!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            👋 Đăng nhập
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Tên đăng nhập
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? "👁️" : "🔒"}
              </button>
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button onClick={() => setShowResetModal(true)} className="text-blue-500 underline">
            Quên mật khẩu?
          </button>
        </div>
      </div>

      {/* Modal Quên Mật Khẩu */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Quên mật khẩu</h2>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded mb-3"
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded mb-3"
              required
            />
            <input
              type="password"
              placeholder="Xác nhận mật khẩu mới"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded mb-3"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              onClick={handleResetPassword}
              className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition mb-2"
            >
              Cập nhật mật khẩu
            </button>
            <button
              onClick={() => setShowResetModal(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded w-full hover:bg-gray-600 transition"
            >
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
