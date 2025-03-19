import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    gender: true, // true: Nam, false: Nữ
    dateOfBirth: '',
    address: '',
    phone: '',
    avatar: '1',
    roleName: 'member'
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Nếu là giới tính thì chuyển thành kiểu boolean
    const newValue = name === "gender" ? value === "true" : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Xử lý đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://localhost:7163/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Đăng ký thất bại, vui lòng thử lại!');
      }

      alert('Đăng ký thành công!');
      navigate('/');
    } catch (err) {
      setError(err.message || 'Lỗi kết nối đến máy chủ, vui lòng kiểm tra lại!');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Đăng ký</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input 
          type="text" 
          name="username" 
          placeholder="Tên đăng nhập" 
          value={formData.username} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Mật khẩu" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        <input 
          type="text" 
          name="fullName" 
          placeholder="Họ và tên" 
          value={formData.fullName} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange} 
          className="w-full p-2 border rounded"
        >
          <option value="true">Nam</option>
          <option value="false">Nữ</option>
        </select>
        <input 
          type="date" 
          name="dateOfBirth" 
          value={formData.dateOfBirth} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Địa chỉ" 
          value={formData.address} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Số điện thoại" 
          value={formData.phone} 
          onChange={handleChange} 
          className="w-full p-2 border rounded" 
          required 
        />
        {error && <p className="text-red-500">{error}</p>}
        <button 
          type="submit" 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
