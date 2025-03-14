import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    // Gọi API đăng nhập
    const response = await fetch("https://localhost:7163/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Sai tài khoản hoặc mật khẩu!");

    const data = await response.json();
    const token = data.token;
    localStorage.setItem("token", token);

    // Giải mã token để lấy role
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    console.log("Role from Token:", role);

    // Kiểm tra role hợp lệ
    if (!role) throw new Error("Không lấy được role!");

    // Cập nhật Redux
    dispatch(login({ user: { username }, role, token }));

    // Điều hướng dựa vào role
    if (role.toLowerCase() === "admin") navigate("/admin");
    else if (role.toLowerCase() === "staff") navigate("/staff");
    else if (role.toLowerCase() === "member") navigate("/member");
    else navigate("/");

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  // Xử lý đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      const response = await fetch("https://localhost:7163/api/users/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user.displayName }),
      });

      if (!response.ok) throw new Error("Đăng nhập thất bại!");

      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);

      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      dispatch(login({ user: { username: user.displayName }, role, token }));
      console.log("Redux State after Google login:", { user: { username: user.displayName }, role, token });

      navigate("/");
    } catch (err) {
      setError("Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 max-w-md w-full bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Đăng nhập</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">hoặc</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 transition"
          disabled={loading}
        >
          {loading ? "Đang xử lý..." : "Đăng nhập với Google"}
        </button>
      </div>
    </div>
  );
};

export default Login;