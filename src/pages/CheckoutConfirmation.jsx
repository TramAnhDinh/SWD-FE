import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

const CheckoutConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleConfirmPayment = () => {
    // Xử lý logic thanh toán (có thể gửi dữ liệu lên backend)
    dispatch(clearCart()); // Xóa giỏ hàng sau khi thanh toán thành công
    alert("Thanh toán thành công!");
    navigate('/'); // Quay lại trang chủ sau khi thanh toán
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Xác nhận thanh toán</h2>

      {/* Form điền thông tin thanh toán */}
      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Họ và tên:</label>
          <input type="text" className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block font-semibold">Địa chỉ giao hàng:</label>
          <input type="text" className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block font-semibold">Số điện thoại:</label>
          <input type="text" className="border p-2 w-full" required />
        </div>
      </form>

      {/* Nút hành động */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/cart')}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Quay lại
        </button>
        <button
          onClick={handleConfirmPayment}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Xác nhận thanh toán
        </button>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;
