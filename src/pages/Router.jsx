import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminPage from "./pages/AdminPage";
import StaffPage from "./pages/StaffPage";
import MemberPage from "./pages/MemberPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

// Component bảo vệ route dựa theo role
const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.roleId)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<HomePage />} />

        {/* Đăng nhập */}
        <Route path="/login" element={<LoginPage />} />

        {/* Phân quyền truy cập */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={[1]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff"
          element={
            <ProtectedRoute allowedRoles={[2]}>
              <StaffPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member"
          element={
            <ProtectedRoute allowedRoles={[3]}>
              <MemberPage />
            </ProtectedRoute>
          }
        />

        {/* Mặc định nếu nhập sai đường dẫn */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
