import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.find((p) => p.id === parseInt(id)));

  if (!product) return <p>Sản phẩm không tồn tại.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link to="/" className="text-blue-500 mb-4 block">← Quay lại</Link>
      <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Cột 1: Hình ảnh */}
        <div className="flex justify-center items-center">
          <img src={product.image} alt={product.name} className="w-full max-w-sm object-cover rounded" />
        </div>

        {/* Cột 2: Thông tin sản phẩm */}
        <div>
          <div className="text-left mb-4">
            <p className="text-lg font-semibold text-gray-600">Tên sản phẩm:</p> {/* Tiêu đề cho tên sản phẩm */}
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1> {/* Tên sản phẩm to và đậm */}

            <p className="text-lg font-semibold text-gray-600 mt-2">Giá:</p> {/* Tiêu đề cho giá tiền */}
            <p className="text-xl text-red-500">{product.price.toLocaleString()} USD</p> {/* Giá tiền màu đỏ và nhỏ hơn tí */}
          </div>

          {/* Mô tả từng dòng với tên sản phẩm */}
          <div className="mb-4 text-gray-700 space-y-2">
          <p><span className="text-lg font-semibold text-gray-600">Mô Tả:</span></p>
            <p><span className="font-semibold text-gray-600">Chất liệu:</span> Cotton cao cấp</p>
            <p><span className="font-semibold text-gray-600">Thiết kế:</span> Đơn giản, dễ phối đồ</p>
            <p><span className="font-semibold text-gray-600">Màu sắc:</span> Trắng, đen, xám</p>
            <p><span className="font-semibold text-gray-600">Kích cỡ:</span> S, M, L, XL</p>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-2 w-full"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
