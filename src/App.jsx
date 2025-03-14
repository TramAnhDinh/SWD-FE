import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import DesignerPage from './pages/DesignerPage';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import StaffPage from "./pages/StaffPage";
import MemberPage from './pages/MemberPage';

import NewProductCarousel from './components/NewProductCarousel';
import ContactPage from './pages/ContactPage';  // Đã có rồi, không cần thêm nữa
import PricingTable from './pages/PricingTable';
import PricingClass from './pages/PricingClass';
import PricingAccessory from './pages/PricingAccessory';
import PricingService from './pages/PricingService';
import DesignSamples from './pages/DesignSamples';
import CheckoutConfirmation from './pages/CheckoutConfirmation';
import InfoPage from './pages/InfoPage';
import ArticleDetail from './pages/ArticleDetail';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import HandPage from './pages/HandPage';
import HandDetail from './pages/HandDetail';
import OrderStatus from './pages/OrderStatus';
import OrderTracking from './pages/OrderTracking';
import ProfilePage from './pages/ProfilePage';

// Component bảo vệ route dựa trên role
const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.user.user);
  
  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.roleId)) return <Navigate to="/" replace />;
  
  return children;
};

const AppContent = () => {
  const location = useLocation();  // Lấy đường dẫn hiện tại
  const hideHeaderFooter = false;

  return (
    <>
      {!hideHeaderFooter && <Header />}

      
      {/* Chỉ hiển thị Carousel khi ở trang chủ (/) */}
      {/* {location.pathname === '/' && <NewProductCarousel />} */}
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/design/custom" element={<DesignerPage />} />
          <Route path="/design/mau-co-san" element={<DesignSamples />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-confirmation" element={<CheckoutConfirmation />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/design/bang-gia-dong-phuc" element={<PricingTable />} />
          <Route path="/design/bang-gia-ao-lop" element={<PricingClass />} />
          <Route path="/design/bang-gia-phu-kien" element={<PricingAccessory />} />
          <Route path="/design/bang-gia-dich-vu" element={<PricingService />} />
          <Route path="/blog" element={<InfoPage />} />
          <Route path="/blog/:id" element={<ArticleDetail />} />
          <Route path="/blog/class" element={<NewsPage />} />
          <Route path="/blog/class/:id" element={<NewsDetail />} />
          <Route path="/blog/b" element={<HandPage />} />
          <Route path="/blog/b/:id" element={<HandDetail />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/member" element={<MemberPage />} />

           {/* Phân quyền role */}
          <Route path="/staff" element={<ProtectedRoute allowedRoles={[2]}><StaffPage /></ProtectedRoute>} />
          <Route path="/member" element={<ProtectedRoute allowedRoles={[3]}><MemberPage /></ProtectedRoute>} />


           {/* Trang cá nhân (cho tất cả user đã login) */}
          <Route path="/profile" element={<ProtectedRoute allowedRoles={[2, 3]}><ProfilePage /></ProtectedRoute>} />

          {/* Nếu nhập sai đường dẫn, quay về trang chủ */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <Router>
      <AppContent />
    </Router>
  </Provider>
);

export default App;


