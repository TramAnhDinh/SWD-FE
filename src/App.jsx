// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import ProductDetail from './pages/ProductDetail';
// import DesignerPage from './pages/DesignerPage';
// import Checkout from './pages/Checkout';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import NewProductCarousel from './components/NewProductCarousel';

// const AppContent = () => {
//   const location = useLocation();  // Lấy đường dẫn hiện tại

//   return (
//     <>
//       <Header />
//       {/* Chỉ hiển thị Carousel khi ở trang chủ (/) */}
//       {location.pathname === '/' && <NewProductCarousel />}
//       <main className="min-h-screen bg-gray-50">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/design" element={<DesignerPage />} />
//           <Route path="/checkout" element={<Checkout />} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// };

// const App = () => (
//   <Provider store={store}>
//     <Router>
//       <AppContent />
//     </Router>
//   </Provider>
// );

// export default App;

import React from 'react';
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

import NewProductCarousel from './components/NewProductCarousel';
import ContactPage from './pages/ContactPage';  // Đã có rồi, không cần thêm nữa
import PricingTable from './pages/PricingTable';
import PricingClass from './pages/PricingClass';
import PricingAccessory from './pages/PricingAccessory';
import PricingService from './pages/PricingService';
import DesignSamples from './pages/DesignSamples';
import CheckoutConfirmation from './pages/CheckoutConfirmation';

const AppContent = () => {
  const location = useLocation();  // Lấy đường dẫn hiện tại

  return (
    <>
      <Header />

      
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
          <Route path="/design/bang-gia-phu-kien" element={<PricingAccessory />} />\
          <Route path="/design/bang-gia-dich-vu" element={<PricingService />} />
        </Routes>
      </main>
      <Footer />
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


