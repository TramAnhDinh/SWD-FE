// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ShoppingCart, Menu, ChevronDown } from "lucide-react";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/slices/userSlice"; // Đúng cú pháp
// import logo from "../assets/logo.png";

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Lấy user & role từ Redux
//   const { user, role } = useSelector((state) => state.user);
//   console.log("User Role:", role);

  
//   // Lấy giỏ hàng từ Redux
//   const cart = useSelector((state) => state.cart.items ?? []);
//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   // Xử lý logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     dispatch(logout());
//     navigate("/login"); // Chuyển hướng sau khi logout
//   };

//   // State cho menu trên mobile
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [designDropdownOpen, setDesignDropdownOpen] = useState(false);
//   const [dongphuc, setDongphuc] = useState(false);

//   return (
//     <header className="bg-black text-white py-2 px-6 flex items-center justify-between relative">
//       {/* Logo */}
//       <Link to="/" className="flex items-center space-x-2">
//         <img src={logo} alt="Logo" className="w-16 h-16" />
//         <span className="text-3xl font-bold text-white">Clothing</span>
//       </Link>

//       {/* Nút Menu Dropdown (Mobile) */}
//       <div className="relative md:hidden">
//         <button className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
//           <Menu />
//         </button>

//         {/* Dropdown Menu */}
//         {menuOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg z-50">
            
//             <Link to="/" className="block px-4 py-2 hover:bg-gray-800">TRANG CHỦ</Link>

//             {/* Dropdown Đồng Phục */}
//             <div>
//               <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center justify-between"
//                 onClick={() => setDongphuc(!dongphuc)}>
//                 ĐỒNG PHỤC <ChevronDown />
//               </button>
//               {dongphuc && (
//                 <div className="bg-gray-900">
//                   <Link to="/design" className="block px-6 py-2 hover:bg-gray-800">TUỲ CHỈNH</Link>
//                   <Link to="/design/templates" className="block px-6 py-2 hover:bg-gray-800">MẪU CÓ SẴN</Link>
//                 </div>
//               )}
//             </div>

//             {/* Dropdown Thiết kế áo */}
//             <div>
//               <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center justify-between"
//                 onClick={() => setDesignDropdownOpen(!designDropdownOpen)}>
//                 THIẾT KẾ ÁO <ChevronDown />
//               </button>
//               {designDropdownOpen && (
//                 <div className="bg-gray-900">
//                   <Link to="/design" className="block px-6 py-2 hover:bg-gray-800">TUỲ CHỈNH</Link>
//                   <Link to="/design/templates" className="block px-6 py-2 hover:bg-gray-800">MẪU CÓ SẴN</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/lien-he" className="block px-4 py-2 hover:bg-gray-800">LIÊN HỆ</Link>
//             <Link to="/cart" className="block px-4 py-2 hover:bg-gray-800 flex items-center">
//               <ShoppingCart />
//               {totalItems > 0 && (
//                 <span className="ml-2 bg-red-500 text-white rounded-full text-xs px-2">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {user ? (
//               <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-800">ĐĂNG XUẤT</button>
//             ) : (
//               <>
//                 <Link to="/login" className="block px-4 py-2 hover:bg-gray-800">ĐĂNG NHẬP</Link>
//                 <Link to="/register" className="block px-4 py-2 hover:bg-gray-800">ĐĂNG KÝ</Link>
//               </>
  
//             )}
//           </div>
//         )}
//       </div>
      
//         {/* Menu trên PC */}
        
//       <nav className="hidden md:flex gap-6 items-center">
//         <Link to="/" className="hover:text-orange-400 text-xl">TRANG CHỦ</Link>

//         <div className="relative group">
//           <button className="hover:text-orange-400 text-xl flex items-center">
//           THIẾT KẾ ÁO <ChevronDown className="ml-2" />
//           </button>
//           <div className="absolute left-0 top-full w-48 bg-black border border-gray-700 rounded-lg  hidden group-hover:block z-50">
//             <Link to="/design/custom" className="block px-4 py-2 hover:bg-gray-800">TUỲ CHỈNH</Link>
//             <Link to="/design/mau-co-san" className="block px-4 py-2 hover:bg-gray-800">MẪU CÓ SẴN</Link>
//           </div>
//         </div>
//         {/* Dropdown Thiết kế áo trên PC */}
//         <div className="relative group">
//           <button className="hover:text-orange-400 text-xl flex items-center">
//           ĐỒNG PHỤC <ChevronDown className="ml-2" />
//           </button>
//           <div className="absolute left-0   top-full max-w-64 w-56 bg-black border border-gray-700 rounded-lg  hidden group-hover:block z-50">
//             <Link to="/design/bang-gia-dong-phuc" className="block px-4 py-2 hover:bg-gray-800 ">BẢNG GIÁ ĐỒNG PHỤC</Link>
//             <Link to="/design/bang-gia-ao-lop" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ ÁO LỚP</Link>
//             <Link to="/design/bang-gia-phu-kien" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ PHỤ KIỆN</Link>
//             <Link to="/design/bang-gia-dich-vu" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ DỊCH VỤ</Link>
          
//           </div>
//         </div>

//         <div className="relative group">
//           <button className="hover:text-orange-400 text-xl flex items-center">
//           BLOG <ChevronDown className="ml-2" />
//           </button>
//           <div className="absolute left-0   top-full max-w-64 w-56 bg-black border border-gray-700 rounded-lg  hidden group-hover:block z-50">
//             <Link to="/blog" className="block px-4 py-2 hover:bg-gray-800 ">THÔNG TIN</Link>
//             <Link to="/blog/class" className="block px-4 py-2 hover:bg-gray-800">ÁO LỚP</Link>
//             <Link to="/blog/b" className="block px-4 py-2 hover:bg-gray-800">CẨM NANG</Link>
//           </div>
//         </div>
//         <Link to="/lien-he" className="hover:text-orange-400 text-xl">LIÊN HỆ</Link>
//         <Link to="/cart" className="hover:text-orange-400 relative">
//           <ShoppingCart />
//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
//               {totalItems}
//             </span>
//           )}
//         </Link>

//         {/* Hiển thị Profile chỉ khi đã đăng nhập */}
//         {user ? (
//           <div className="relative group">
//             <button className="hover:text-orange-400 text-xl flex items-center">
//               TRANG CÁ NHÂN <ChevronDown className="ml-2" />
//             </button>
//             <div className="absolute right-0 top-full w-48 bg-black border border-gray-700 rounded-lg hidden group-hover:block z-50">
//               {/* <Link to="/staff" className="block px-4 py-2 hover:bg-gray-800">TRANG CÁ NHÂN</Link> */}
//               {role === "member" && <Link to="/member" className="block px-4 py-2 hover:bg-gray-800">TRANG CÁ NHÂN</Link>}
            
//               {role === "staff" && <Link to="/staff" className="block px-4 py-2 hover:bg-gray-800">TRANG CÁ NHÂN</Link>}

              

//               {/* <Link to="/member" className="block px-4 py-2 hover:bg-gray-800">TRANG CÁ NHÂN</Link> */}
//               {/* {role === "staff" && <Link to="/staff" className="block px-4 py-2 hover:bg-gray-800">STAFF</Link>} */}
//               {/* {role === "member" && <Link to="/member" className="block px-4 py-2 hover:bg-gray-800">TRANG CA NHAN</Link>} */}
//               <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-800">
//                 ĐĂNG XUẤT
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             <Link to="/login" className="hover:text-orange-400 text-xl">ĐĂNG NHẬP</Link>
//             <Link to="/register" className="hover:text-orange-400 text-xl">ĐĂNG KÝ</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice"; // Đúng cú pháp
import logo from "../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Lấy user & role từ Redux
  const { user, role } = useSelector((state) => state.user);
  console.log("User Role:", role);

  // Lấy giỏ hàng từ Redux
  const cart = useSelector((state) => state.cart.items ?? []);
  const cartItemCount = useSelector((state) => state.cart.items.length);

  // Xử lý logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login"); // Chuyển hướng sau khi logout
  };

  // State cho menu trên mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const [designDropdownOpen, setDesignDropdownOpen] = useState(false);
  const [dongphuc, setDongphuc] = useState(false);

  return (
    <header className="bg-black text-white py-2 px-6 flex items-center justify-between relative">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-16 h-16" />
        <span className="text-3xl font-bold text-white">Clothing</span>
      </Link>

      {/* Nút Menu Dropdown (Mobile) */}
      <div className="relative md:hidden">
        <button className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg z-50">
            {role !== "staff" && (
              <>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-800">TRANG CHỦ</Link>

                {/* Dropdown Đồng Phục */}
                <div>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center justify-between"
                    onClick={() => setDongphuc(!dongphuc)}>
                    ĐỒNG PHỤC <ChevronDown />
                  </button>
                  {dongphuc && (
                    <div className="bg-gray-900">
                      <Link to="/design" className="block px-6 py-2 hover:bg-gray-800">TUỲ CHỈNH</Link>
                      <Link to="/design/templates" className="block px-6 py-2 hover:bg-gray-800">MẪU CÓ SẴN</Link>
                    </div>
                  )}
                </div>

                {/* Dropdown Thiết kế áo */}
                <div>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center justify-between"
                    onClick={() => setDesignDropdownOpen(!designDropdownOpen)}>
                    THIẾT KẾ ÁO <ChevronDown />
                  </button>
                  {designDropdownOpen && (
                    <div className="bg-gray-900">
                      <Link to="/design" className="block px-6 py-2 hover:bg-gray-800">TUỲ CHỈNH</Link>
                      <Link to="/design/templates" className="block px-6 py-2 hover:bg-gray-800">MẪU CÓ SẴN</Link>
                    </div>
                  )}
                </div>

                <Link to="/lien-he" className="block px-4 py-2 hover:bg-gray-800">LIÊN HỆ</Link>
                <Link to="/cart" className="block px-4 py-2 hover:bg-gray-800 flex items-center">
                  <ShoppingCart />
                  {totalItems > 0 && (
                    <span className="ml-2 bg-red-500 text-white rounded-full text-xs px-2">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </>
            )}

            {user ? (
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-800">ĐĂNG XUẤT</button>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-800">ĐĂNG NHẬP</Link>
                <Link to="/register" className="block px-4 py-2 hover:bg-gray-800">ĐĂNG KÝ</Link>
              </>
            )}
          </div>
        )}
      </div>

      {/* Menu trên PC */}
      <nav className="hidden md:flex gap-6 items-center">
        {role === "staff" ? (
          <>
            <Link to="/staff" className="hover:text-orange-400 text-xl">TRANG NHÂN VIÊN</Link>
            <Link to="/order-tracking" className="hover:text-orange-400 text-xl">THEO DÕI ĐƠN HÀNG</Link>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-orange-400 text-xl">TRANG CHỦ</Link>

            {/* Các dropdown khác */}
            <div className="relative group">
              <button className="hover:text-orange-400 text-xl flex items-center">
                THIẾT KẾ ÁO <ChevronDown className="ml-2" />
              </button>
              <div className="absolute left-0 top-full w-48 bg-black border border-gray-700 rounded-lg hidden group-hover:block z-50">
                <Link to="/design/custom" className="block px-4 py-2 hover:bg-gray-800">TUỲ CHỈNH</Link>
                <Link to="/design/mau-co-san" className="block px-4 py-2 hover:bg-gray-800">MẪU CÓ SẴN</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-orange-400 text-xl flex items-center">
                ĐỒNG PHỤC <ChevronDown className="ml-2" />
              </button>
              <div className="absolute left-0 top-full max-w-64 w-56 bg-black border border-gray-700 rounded-lg hidden group-hover:block z-50">
                <Link to="/design/bang-gia-dong-phuc" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ ĐỒNG PHỤC</Link>
                <Link to="/design/bang-gia-ao-lop" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ ÁO LỚP</Link>
                <Link to="/design/bang-gia-phu-kien" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ PHỤ KIỆN</Link>
                <Link to="/design/bang-gia-dich-vu" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ DỊCH VỤ</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-orange-400 text-xl flex items-center">
                BLOG <ChevronDown className="ml-2" />
              </button>
              <div className="absolute left-0 top-full max-w-64 w-56 bg-black border border-gray-700 rounded-lg hidden group-hover:block z-50">
                <Link to="/blog" className="block px-4 py-2 hover:bg-gray-800">THÔNG TIN</Link>
                <Link to="/blog/class" className="block px-4 py-2 hover:bg-gray-800">ÁO LỚP</Link>
                <Link to="/blog/b" className="block px-4 py-2 hover:bg-gray-800">CẨM NANG</Link>
              </div>
            </div>

            <Link to="/lien-he" className="hover:text-orange-400 text-xl">LIÊN HỆ</Link>
            <Link to="/cart" className="hover:text-orange-400 relative">
              <ShoppingCart />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </>
        )}

        {/* Hiển thị Trang Cá Nhân */}
        {user && (
          <div className="relative group">
            <button className="hover:text-orange-400 text-xl flex items-center">
              TRANG CÁ NHÂN <ChevronDown className="ml-2" />
            </button>
            <div className="absolute right-0 top-full w-48 bg-black border border-gray-700 rounded-lg hidden group-hover:block z-50">
              {role === "member" && <Link to="/member" className="block px-4 py-2 hover:bg-gray-800">TRANG CÁ NHÂN</Link>}
              {role === "staff" && <Link to="/staff" className="block px-4 py-2 hover:bg-gray-800">TRANG CÁ NHÂN</Link>}
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-800">ĐĂNG XUẤT</button>
            </div>
          </div>
        )}

        {!user && (
          <>
            <Link to="/login" className="hover:text-orange-400 text-xl">ĐĂNG NHẬP</Link>
            <Link to="/register" className="hover:text-orange-400 text-xl">ĐĂNG KÝ</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
