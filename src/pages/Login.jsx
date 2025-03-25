// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slices/userSlice";
// import { useNavigate } from "react-router-dom";
// import { auth, googleProvider } from "../firebaseConfig";
// import { signInWithPopup } from "firebase/auth";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showResetModal, setShowResetModal] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Xử lý đăng nhập tài khoản thường
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("https://localhost:7163/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) throw new Error("Sai tài khoản hoặc mật khẩu!");

//       const data = await response.json();
//       const token = data?.token;
//       if (!token) {
//         throw new Error("Token không hợp lệ hoặc bị thiếu!");
//       }
//       localStorage.setItem("token", token);

//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       // const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       console.log("📌 Decoded Token:", decodedToken); // Xem token có role hay không
//       // const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
//       const roleKey = Object.keys(decodedToken).find(key => key.includes("role"));
//       const role = decodedToken[roleKey];
//       console.log("📌 Role từ token:", role);

//       dispatch(login({ user: { username }, role, token }));

//       if (role.toLowerCase() === "admin") navigate("/admin");
//       else if (role.toLowerCase() === "staff") navigate("/staff");
//       else if (role.toLowerCase() === "member") navigate("/member");
//       else navigate("/");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Xử lý đăng nhập bằng Google
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const idToken = await result.user.getIdToken(); // Lấy idToken từ Firebase

//       const response = await fetch("https://localhost:7163/api/users/google-login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ idToken }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Lỗi đăng nhập Google!");

//       localStorage.setItem("token", data.token);

//       dispatch(login({ user: { username: result.user.email }, role: "member", token: data.token }));
//       navigate("/member");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Xử lý đổi mật khẩu
//   const handleResetPassword = async () => {
//     if (!username) {
//       setError("Vui lòng nhập tên đăng nhập.");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setError("Mật khẩu xác nhận không khớp!");
//       return;
//     }

//     try {
//       const response = await fetch("https://localhost:7163/api/users/change-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password: newPassword, confirmPassword }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Mật khẩu đã được cập nhật thành công!");
//         setShowResetModal(false);
//       } else {
//         throw new Error(data.message || "Cập nhật mật khẩu thất bại!");
//       }
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
//             type="text"
//             placeholder="Tên đăng nhập"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//             autoFocus
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
//             disabled={loading}
//           >
//             {loading ? "Đang đăng nhập..." : "Đăng nhập"}
//           </button>
//         </form>
//         <div className="text-center mt-4 my-2 text-gray-500 font-semibold">hoặc</div>
//         <div className="text-center mt-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 transition"
//           >
//             Đăng nhập bằng Google
//           </button>
//           <button onClick={() => setShowResetModal(true)} className="text-blue-500 underline mt-2">
//             Quên mật khẩu?
//           </button>
//         </div>
//       </div>

//       {/* Modal Quên Mật Khẩu */}
//       {showResetModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Quên mật khẩu</h2>
//             <input
//               type="text"
//               placeholder="Tên đăng nhập"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu mới"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             {error && <p className="text-red-500">{error}</p>}
//             <button
//               onClick={handleResetPassword}
//               className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition mb-2"
//             >
//               Cập nhật mật khẩu
//             </button>
//             <button
//               onClick={() => setShowResetModal(false)}
//               className="bg-gray-500 text-white py-2 px-4 rounded w-full hover:bg-gray-600 transition"
//             >
//               Hủy
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slices/userSlice";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showResetModal, setShowResetModal] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Xử lý đăng nhập tài khoản thường
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) throw new Error("Sai tài khoản hoặc mật khẩu!");

//       const data = await response.json();
//       const token = data?.token;
//       if (!token) throw new Error("Token không hợp lệ hoặc bị thiếu!");

//       localStorage.setItem("token", token);

//       // Giải mã token lấy quyền (role)
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const roleKey = Object.keys(decodedToken).find((key) => key.includes("role"));
//       const role = decodedToken[roleKey];

//       dispatch(login({ user: { username }, role, token }));

//       // Điều hướng theo role
//       if (role.toLowerCase() === "admin") navigate("/admin");
//       else if (role.toLowerCase() === "staff") navigate("/staff");
//       else if (role.toLowerCase() === "member") navigate("/member");
//       else navigate("/");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Xử lý đổi mật khẩu
//   const handleResetPassword = async () => {
//     if (!username) {
//       setError("Vui lòng nhập tên đăng nhập.");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setError("Mật khẩu xác nhận không khớp!");
//       return;
//     }

//     try {
//       const response = await fetch("https://localhost:7163/api/users/change-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password: newPassword, confirmPassword }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Mật khẩu đã được cập nhật thành công!");
//         setShowResetModal(false);
//       } else {
//         throw new Error(data.message || "Cập nhật mật khẩu thất bại!");
//       }
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
//             type="text"
//             placeholder="Tên đăng nhập"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//             autoFocus
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
//             disabled={loading}
//           >
//             {loading ? "Đang đăng nhập..." : "Đăng nhập"}
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <button onClick={() => setShowResetModal(true)} className="text-blue-500 underline">
//             Quên mật khẩu?
//           </button>
//         </div>
//       </div>

//       {/* Modal Quên Mật Khẩu */}
//       {showResetModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Quên mật khẩu</h2>
//             <input
//               type="text"
//               placeholder="Tên đăng nhập"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu mới"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             {error && <p className="text-red-500">{error}</p>}
//             <button
//               onClick={handleResetPassword}
//               className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition mb-2"
//             >
//               Cập nhật mật khẩu
//             </button>
//             <button
//               onClick={() => setShowResetModal(false)}
//               className="bg-gray-500 text-white py-2 px-4 rounded w-full hover:bg-gray-600 transition"
//             >
//               Hủy
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slices/userSlice";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showResetModal, setShowResetModal] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Xử lý đăng nhập
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       // const response = await fetch("https://localhost:7163/api/users/login", {
//       const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) throw new Error("Sai tài khoản hoặc mật khẩu!");

//       // Kiểm tra nếu response là JSON hợp lệ
//       let data;
//       try {
//         data = await response.json();
//       } catch {
//         throw new Error("Lỗi phản hồi từ máy chủ.");
//       }

//       const token = data?.token;
//       if (!token) throw new Error("Token không hợp lệ!");

//       localStorage.setItem("token", token);

//       // Giải mã token lấy quyền (role)
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const roleKey = Object.keys(decodedToken).find((key) => key.includes("role"));
//       const role = decodedToken[roleKey];

//       dispatch(login({ user: { username }, role, token }));

//       // Điều hướng theo role
//       if (role.toLowerCase() === "admin") navigate("/admin");
//       else if (role.toLowerCase() === "staff") navigate("/staff");
//       else navigate("/");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Xử lý đổi mật khẩu
//   const handleResetPassword = async () => {
//     if (!username) {
//       setError("Vui lòng nhập tên đăng nhập.");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setError("Mật khẩu xác nhận không khớp!");
//       return;
//     }

//     try {
//       // const response = await fetch("https://localhost:7163/api/users/change-password", {
//       const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/change-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           oldPassword: "yourOldPassword",
//           newPassword: "yourNewPassword",
//           confirmPassword: "yourNewPassword" }),
//         // body: JSON.stringify({ username, password: newPassword }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Mật khẩu đã được cập nhật thành công!");
//         setShowResetModal(false);
//       } else {
//         throw new Error(data.message || "Cập nhật mật khẩu thất bại!");
//       }
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
//             type="text"
//             placeholder="Tên đăng nhập"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//             autoFocus
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Mật khẩu"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-2 top-2 text-gray-500"
//             >
//               {showPassword ? "👁️" : "🔒"}
//             </button>
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition"
//             disabled={loading}
//           >
//             {loading ? "Đang đăng nhập..." : "Đăng nhập"}
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <button onClick={() => setShowResetModal(true)} className="text-blue-500 underline">
//             Quên mật khẩu?
//           </button>
//         </div>
//       </div>

//       {/* Modal Quên Mật Khẩu */}
//       {showResetModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Quên mật khẩu</h2>
//             <input
//               type="text"
//               placeholder="Tên đăng nhập"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Mật khẩu mới"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Xác nhận mật khẩu mới"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full p-2 border rounded mb-3"
//               required
//             />
//             {error && <p className="text-red-500">{error}</p>}
//             <button
//               onClick={handleResetPassword}
//               className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition mb-2"
//             >
//               Cập nhật mật khẩu
//             </button>
//             <button
//               onClick={() => setShowResetModal(false)}
//               className="bg-gray-500 text-white py-2 px-4 rounded w-full hover:bg-gray-600 transition"
//             >
//               Hủy
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Xử lý đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const textResponse = await response.text();
      console.log("📩 Phản hồi từ API:", textResponse);

      if (!response.ok) {
        throw new Error("Sai tài khoản hoặc mật khẩu!");
      }

      let token = textResponse.trim(); // JWT token

      if (!token.startsWith("ey")) {
        try {
          const data = JSON.parse(textResponse);
          throw new Error(data.message || "Lỗi phản hồi từ máy chủ!");
        } catch {
          throw new Error("Phản hồi không hợp lệ: " + textResponse);
        }
      }

      localStorage.setItem("token", token);

      // Giải mã token lấy quyền (role)
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const roleKey = Object.keys(decodedToken).find((key) => key.includes("role"));
      const role = decodedToken[roleKey];

      dispatch(login({ user: { username }, role, token }));

      // Điều hướng theo role
      navigate(role.toLowerCase() === "admin" ? "/admin" : role.toLowerCase() === "staff" ? "/staff" : "/");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Xử lý đổi mật khẩu
  const handleResetPassword = async () => {
    if (!username) {
      setError("Vui lòng nhập tên đăng nhập.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }

try {
        const response = await fetch("https://phamdangtuc-001-site1.ntempurl.com/api/users/change-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password: newPassword, confirmPassword }),
        });
  
        const data = await response.json();
        if (response.ok) {
          alert("Mật khẩu đã được cập nhật thành công!");
          setShowResetModal(false);
        } else {
          throw new Error(data.message || "Cập nhật mật khẩu thất bại!");
        }
      } catch (err) {
        setError(err.message);
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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPassword ? "👁️" : "🔒"}
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button onClick={() => setShowResetModal(true)} className="text-blue-500 underline">
            Quên mật khẩu?
          </button>
        </div>
      </div>

      {/* Modal Quên Mật Khẩu */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Quên mật khẩu</h2>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded mb-3"
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded mb-3"
              required
            />
            <input
              type="password"
              placeholder="Xác nhận mật khẩu mới"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded mb-3"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              onClick={handleResetPassword}
              className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition mb-2"
            >
              Cập nhật mật khẩu
            </button>
            <button
              onClick={() => setShowResetModal(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded w-full hover:bg-gray-600 transition"
            >
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
