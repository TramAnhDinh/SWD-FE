import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const ProfilePage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role); // Lấy role từ Redux

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold">Thông Tin Cá Nhân</h2>
      <p className="mt-4">Tên: {user.displayName || "Chưa cập nhật"}</p>
      <p>Email: {user.email}</p>
      <p className="mt-2">Vai trò: <span className="font-bold text-blue-600">{role}</span></p>

      <button
        onClick={() => navigate(`/${role}`)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Đi tới trang {role}
      </button>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Đăng xuất
      </button>
    </div>
  );
};

export default ProfilePage;
