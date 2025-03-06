import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4 rounded" />
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-red-500 font-bold mb-4">{product.price.toLocaleString()} USD</p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-2 w-full"
      >
        Thêm vào giỏ
      </button>

      <Link to={`/product/${product.id}`}>
        <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition w-full">
          Chi tiết sản phẩm
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
