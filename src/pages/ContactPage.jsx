import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/slices/contactSlice.js';
import { MapPin, Mail, Phone, CreditCard } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(form));
    alert('Gửi thông tin thành công!');
    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Liên hệ</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Thông tin liên hệ */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">CÔNG TY TNHH ĐỒNG PHỤC CLOTHING</h3>
          <p className="flex items-center"><MapPin className="mr-2" /> Địa chỉ: 12 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP.HCM</p>
          <p className="flex items-center"><Mail className="mr-2" /> Email: info@potato.clothing</p>
          <p className="flex items-center"><Phone className="mr-2" /> Hotline: 078 608 6494</p>
          <p className="flex items-center"><CreditCard className="mr-2" /> MST: 0314721531</p>
        </div>
        
        {/* Form liên hệ */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow-md rounded-md">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Điện thoại"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Nội dung"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Gửi thông tin
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
