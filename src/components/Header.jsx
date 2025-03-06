// import React from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../firebaseConfig';
// import { signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { ShoppingCart } from 'lucide-react';
// import { useSelector } from 'react-redux';  // Import useSelector để lấy dữ liệu từ Redux

// const Header = () => {
//   const [user] = useAuthState(auth);
//   const cart = useSelector((state) => state.cart);  // Lấy giỏ hàng từ Redux

//   // Tính tổng số lượng sản phẩm trong giỏ hàng
//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   const handleLogout = () => signOut(auth);

//   return (
//     <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
//       <Link to="/" className="text-3xl font-bold text-white">Clothing</Link>
//       <nav className="flex gap-6 items-center">
//         <Link to="/" className="hover:text-gray-400">Trang chủ</Link>
//         <Link to="/design" className="hover:text-gray-400">Thiết kế áo</Link>
//         <Link to="/cart" className="hover:text-gray-400 relative">
//           <ShoppingCart />
//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
//               {totalItems}
//             </span>
//           )}
//         </Link>
//         {user ? (
//           <button onClick={handleLogout} className="hover:text-gray-400">Đăng xuất</button>
//         ) : (
//           <>
//             <Link to="/login" className="hover:text-gray-400">Đăng nhập</Link>
//             <Link to="/register" className="hover:text-gray-400">Đăng ký</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [user] = useAuthState(auth);
  const cart = useSelector((state) => state.cart.items ?? []);  // 🛒 Lấy items từ cart hoặc [] nếu không có

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => signOut(auth);

  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-white">Clothing</Link>
      <nav className="flex gap-6 items-center">
        <Link to="/" className="hover:text-gray-400">Trang chủ</Link>
        <Link to="/design" className="hover:text-gray-400">Thiết kế áo</Link>
        <Link to="/lien-he" className="hover:text-gray-400">Liên Hệ</Link>
        <Link to="/cart" className="hover:text-gray-400 relative">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              {totalItems}
            </span>
          )}
        </Link>
        {user ? (
          <button onClick={handleLogout} className="hover:text-gray-400">Đăng xuất</button>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-400">Đăng nhập</Link>
            <Link to="/register" className="hover:text-gray-400">Đăng ký</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
