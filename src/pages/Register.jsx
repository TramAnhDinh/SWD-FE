// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaLock, FaUserCircle, FaVenusMars, FaCalendar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     fullName: '',
//     gender: true, // true: Nam, false: Nữ
//     dateOfBirth: '',
//     address: '',
//     phone: '',
//     avatar: '1',
//     roleName: ''
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Xử lý thay đổi input
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Nếu là giới tính thì chuyển thành kiểu boolean
//     const newValue = name === "gender" ? value === "true" : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   // Xử lý đăng ký
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('https://phamdangtuc-001-site1.ntempurl.com/api/users', {
//       // const response = await fetch('https://localhost:7163/api/users', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Đăng ký thất bại, vui lòng thử lại!');
//       }

//       alert('Đăng ký thành công!');
//       navigate('/');
//     } catch (err) {
//       setError(err.message || 'Lỗi kết nối đến máy chủ, vui lòng kiểm tra lại!');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             👋 Đăng ký tài khoản
//           </h2>
//         </div>

//         <form onSubmit={handleRegister} className="mt-8 space-y-6">
//           <div className="rounded-md shadow-sm space-y-4">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUser className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Tên đăng nhập"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Mật khẩu"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUserCircle className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Họ và tên"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaVenusMars className="h-5 w-5 text-gray-400" />
//               </div>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white"
//               >
//                 <option value="true">Nam</option>
//                 <option value="false">Nữ</option>
//               </select>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaCalendar className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="date"
//                 name="dateOfBirth"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Địa chỉ"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaPhone className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Số điện thoại"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 required
//               />
//             </div>
//           </div>

//           {error && (
//             <div className="rounded-md bg-red-50 p-4">
//               <div className="flex">
//                 <div className="ml-3">
//                   <h3 className="text-sm font-medium text-red-800">{error}</h3>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Đăng ký
//             </button>
//           </div>
//         </form>

//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-600">
//             Đã có tài khoản?{' '}
//             <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//               Đăng nhập
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        fullName: "",
        gender: true, // true: Nam, false: Nữ
        dateOfBirth: "",
        address: "",
        phone: "",
        avatar: "1",
        roleName: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Đăng ký thành công!", formData);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-700">Đăng Ký</h2>
                <p className="text-center text-sm text-gray-600">Tạo tài khoản mới</p>
                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input className="p-2 border rounded-lg" type="text" name="fullName" placeholder="Họ và Tên" value={formData.fullName} onChange={handleChange} required />
                    <input className="p-2 border rounded-lg" type="text" name="username" placeholder="Tên đăng nhập" value={formData.username} onChange={handleChange} required />
                    <input className="p-2 border rounded-lg" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input className="p-2 border rounded-lg" type="password" name="password" placeholder="Mật khẩu" value={formData.password} onChange={handleChange} required />
                    <input className="p-2 border rounded-lg" type="text" name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} required />
                    <input className="p-2 border rounded-lg" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                    <select className="p-2 border rounded-lg" name="gender" value={formData.gender} onChange={handleChange}>
                        <option value={true}>Nam</option>
                        <option value={false}>Nữ</option>
                    </select>
                    <input className="p-2 border rounded-lg" type="text" name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} required />
                    <button type="submit" className="bg-blue-700 text-white py-2 rounded-lg hover:scale-105 transition duration-300">Đăng Ký</button>
                </form>
            </div>
        </div>
    );
};

export default Register;