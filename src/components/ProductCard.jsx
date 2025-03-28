import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { v4 as uuidv4 } from 'uuid';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [customDescription, setCustomDescription] = useState("");

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.jpg";
    if (imagePath.startsWith("http")) return imagePath;
    return `https://phamdangtuc-001-site1.ntempurl.com/uploads/${imagePath.split("\\").pop()}`;
  };

  const handleAddToCart = () => {
    const formattedProduct = {
      id: product?.productId ? Number(product.productId) : uuidv4(),
      name: product?.productName || "Sản phẩm chưa đặt tên",
      price: product?.price ? Number(product.price) : 0,
      stock: product?.stockInStorage ? Number(product.stockInStorage) : 0,
      image: getImageUrl(product?.image),
      categoryId: product?.categoryId ? Number(product.categoryId) : null,
      description: product?.description || "Chưa có mô tả",
      isDeleted: Boolean(product?.isDeleted),
      quantity: 1,
      isCustomProduct: true,
      customDescription: customDescription
    };

    dispatch(addToCart(formattedProduct));
    setShowDescriptionModal(false);
    setCustomDescription("");
  };

  return (
    <>
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
        <img 
          src={getImageUrl(product.image)} 
          alt={product.productName} 
          className="w-full h-60 object-cover mb-4 rounded"
          onError={(e) => {
            e.target.src = "/placeholder.jpg";
          }}
        />
        <h3 className="text-xl font-bold mb-2">{product.productName}</h3>
        <p className="text-red-500 font-bold mb-4">{product.price?.toLocaleString('vi-VN')} VND</p>

        <button
          onClick={() => setShowDescriptionModal(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-2 w-full"
        >
          Thêm vào giỏ
        </button>

        <Link to={`/product/${product.productId}`}>
          <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition w-full">
            Chi tiết sản phẩm
          </button>
        </Link>
      </div>

      {/* Modal nhập mô tả */}
      {showDescriptionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Thêm mô tả cho sản phẩm</h3>
            <div className="mb-4">
              <img 
                src={getImageUrl(product.image)} 
                alt={product.productName} 
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-2">{product.productName}</p>
              <p className="text-red-500 font-bold">{product.price?.toLocaleString('vi-VN')} VND</p>
            </div>
            <textarea
              value={customDescription}
              onChange={(e) => setCustomDescription(e.target.value)}
              placeholder="Nhập mô tả tùy chỉnh cho sản phẩm..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              rows="4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowDescriptionModal(false);
                  setCustomDescription("");
                }}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Hủy
              </button>
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
