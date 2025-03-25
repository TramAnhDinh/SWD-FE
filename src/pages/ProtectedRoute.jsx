import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const userRole = useSelector((state) => state.auth.user?.role ?? "guest");

  if (!allowedRoles.includes(userRole)) {
    alert("Bạn không có quyền truy cập trang này!");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
