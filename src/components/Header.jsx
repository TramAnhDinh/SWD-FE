import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { useSelector } from 'react-redux';
import logo from "../assets/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const cart = useSelector((state) => state.cart.items ?? []);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const handleLogout = () => signOut(auth);

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

      {/* Nút Menu Dropdown (Hiển thị trên Mobile & iPad) */}
      <div className="relative md:hidden">
        <button
          className="text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg z-50">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-800">TRANG CHỦ</Link>
            <div>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center justify-between"
                onClick={() => setDongphuc(!dongphuc)}
              >
                ĐỒNG PHỤC <ChevronDown />
              </button>
              {dongphuc && (
                <div className="bg-gray-900 mt-10">
                  <Link to="/design" className="block px-6 py-2 hover:bg-gray-800">Tùy chỉnh</Link>
                  <Link to="/design/templates" className="block px-6 py-2 hover:bg-gray-800">Mẫu có sẵn</Link>
                </div>
              )}
            </div>
            {/* Thiết kế áo Dropdown trên Mobile */}
            <div>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center justify-between"
                onClick={() => setDesignDropdownOpen(!designDropdownOpen)}
              >
                THIẾT KẾ ÁO <ChevronDown />
              </button>
              {designDropdownOpen && (
                <div className="bg-gray-900  ">
                  <Link to="/design" className="block px-6 py-2 hover:bg-gray-800">Tùy chỉnh</Link>
                  <Link to="/design/templates" className="block px-6 py-2 hover:bg-gray-800">Mẫu có sẵn</Link>
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
            {user ? (
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-800">ĐĂNG SUẤT</button>
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
        <Link to="/" className="hover:text-orange-400 text-xl">TRANG CHỦ</Link>

        <div className="relative group">
          <button className="hover:text-orange-400 text-xl flex items-center">
             ĐỒNG PHỤC <ChevronDown className="ml-2" />
          </button>
          <div className="absolute left-0 top-full w-48 bg-black border border-gray-700 rounded-lg  hidden group-hover:block z-50">
            <Link to="/design/custom" className="block px-4 py-2 hover:bg-gray-800">Tùy chỉnh</Link>
            <Link to="/design/templates" className="block px-4 py-2 hover:bg-gray-800">Mẫu có sẵn</Link>
          </div>
        </div>
        {/* Dropdown Thiết kế áo trên PC */}
        <div className="relative group">
          <button className="hover:text-orange-400 text-xl flex items-center">
            THIẾT KẾ ÁO <ChevronDown className="ml-2" />
          </button>
          <div className="absolute left-0   top-full max-w-64 w-56 bg-black border border-gray-700 rounded-lg  hidden group-hover:block z-50">
          <Link to="/design" className="block px-4 py-2 hover:bg-gray-800 ">THIẾT KẾ TRANG PHỤC</Link>
            <Link to="/design/bang-gia-dong-phuc" className="block px-4 py-2 hover:bg-gray-800 ">BẢNG GIÁ ĐỒNG PHỤC</Link>
            <Link to="/design/templates" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ ÁO LỚP</Link>
            <Link to="/design/custom" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ ĐỒNG PHỤC</Link>
            <Link to="/design/templates" className="block px-4 py-2 hover:bg-gray-800">BẢNG GIÁ ÁO LỚP</Link>
          
          </div>
        </div>

        <Link to="/lien-he" className="hover:text-orange-400 text-xl">Liên Hệ</Link>
        <Link to="/cart" className="hover:text-orange-400 relative">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
              {totalItems}
            </span>
          )}
        </Link>
        {user ? (
          <button onClick={handleLogout} className="hover:text-orange-400">ĐĂNG SUẤT</button>
        ) : (
          <>
            <Link to="/login" className="hover:text-orange-400">ĐĂNG NHẬP</Link>
            <Link to="/register" className="hover:text-orange-400">ĐĂNG KÝ</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

