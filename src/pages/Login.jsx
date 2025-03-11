// import React, { useState } from 'react';
// import { auth, googleProvider } from '../firebaseConfig';
// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       navigate('/');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="p-8 max-w-md w-full bg-white shadow-md rounded-lg">
//         <h2 className="text-3xl font-bold mb-6 text-center">Đăng nhập</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Mật khẩu"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//           {error && <p className="text-red-500">{error}</p>}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition"
//           >
//             Đăng nhập
//           </button>
//         </form>

//         {/* Thêm dấu hoặc ở giữa */}
//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-2 text-gray-500">hoặc</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         <button
//           onClick={handleGoogleLogin}
//           className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 transition"
//         >
//           Đăng nhập với Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slices/userSlice";
// import { useNavigate } from "react-router-dom";
// import { auth, googleProvider } from "../firebaseConfig";
// import { signInWithPopup } from "firebase/auth";

// const staffAccount = { email: "staff@test.com", password: "staff123", role: "staff" };

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === staffAccount.email && password === staffAccount.password) {
//       dispatch(login({ user: { email }, role: "staff" }));
//       navigate("/staff");
//     } else {
//       setError("Sai tài khoản hoặc mật khẩu!");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const userCredential = await signInWithPopup(auth, googleProvider);
//       const user = userCredential.user;

//       if (user.email === staffAccount.email) {
//         dispatch(login({ user: { email: user.email }, role: "staff" }));
//         navigate("/staff");
//       } else {
//         setError("Chỉ tài khoản staff được phép đăng nhập!");
//       }
//     } catch (err) {
//       setError("Lỗi khi đăng nhập với Google.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="p-8 max-w-md w-full bg-white shadow-md rounded-lg">
//         <h2 className="text-3xl font-bold mb-6 text-center">Đăng nhập Staff</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
//           <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
//           {error && <p className="text-red-500">{error}</p>}
//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition">Đăng nhập</button>
//         </form>
//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-2 text-gray-500">hoặc</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>
//         <button onClick={handleGoogleLogin} className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 transition">
//           Đăng nhập với Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const userRoles = {
  admin: { email: "admin@company.com", password: "admin123" },
  staff: [
    { email: "staff1@company.com", password: "staff123" },
    { email: "staff2@company.com", password: "staff123" }
  ],
  user: { email: "user@company.com", password: "user123" }
};

const getRoleByEmail = (email) => {
  if (userRoles.admin.email === email) return "admin";
  if (userRoles.staff.some(staff => staff.email === email)) return "staff";
  return "user";
};

const Login = () => {
  const [email, setEmail] = useState("");
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
      await signInWithEmailAndPassword(auth, email, password);
      const role = getRoleByEmail(email);
      dispatch(login({ user: { email }, role }));
      
      if (role === "admin") navigate("/admin");
      else if (role === "staff") navigate("/staff");
      else navigate("/");
    } catch (err) {
      setError("Sai tài khoản hoặc mật khẩu!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const role = getRoleByEmail(user.email);
      dispatch(login({ user: { email: user.email }, role }));
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
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required autoFocus />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">hoặc</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button onClick={handleGoogleLogin} className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 transition" disabled={loading}>
          {loading ? "Đang xử lý..." : "Đăng nhập với Google"}
        </button>
      </div>
    </div>
  );
};

export default Login;

