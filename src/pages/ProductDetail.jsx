import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addToCartAction } from "../redux/slices/cartSlice";
import { FaShoppingCart, FaArrowLeft, FaBox, FaTag, FaInfoCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from "../utils/axiosInstance";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);
  const [customDescription, setCustomDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const shirtColors = [
    "Trắng",
    "Đen",
    "Xám",
    "Đỏ",
    "Xanh dương",
    "Xanh lá",
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch product details
        const response = await fetch(`https://phamdangtuc-001-site1.ntempurl.com/api/Product/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.status === 1 && data.data) {
          setProduct(data.data);
          
          // Fetch category information if categoryId exists
          if (data.data.categoryId) {
            try {
              const categoryResponse = await fetch(`https://phamdangtuc-001-site1.ntempurl.com/api/Category/${data.data.categoryId}`);
              if (!categoryResponse.ok) {
                throw new Error(`HTTP error! status: ${categoryResponse.status}`);
              }
              const categoryData = await categoryResponse.json();
              if (categoryData.status === 1 && categoryData.data) {
                setCategory(categoryData.data);
              }
            } catch (categoryErr) {
              console.error("Error fetching category:", categoryErr);
              // Don't set error state for category fetch failure
            }
          }
        } else {
          throw new Error(data.message || "Không tìm thấy thông tin sản phẩm");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message || "Lỗi khi tải thông tin sản phẩm. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    } else {
      setError("ID sản phẩm không hợp lệ");
      setLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Vui lòng chọn màu áo!");
      return;
    }

    if (product) {
      try {
        const productWithDetails = {
          ...product,
          productId: product.productId,
          name: product.productName,
          isCustomProduct: true,
          customDescription: customDescription,
          shirtColor: selectedColor,
          description: product.productName,
          image: product.image,
          price: product.price,
          quantity: 1
        };
        console.log("Adding to cart:", productWithDetails);
        dispatch(addToCartAction(productWithDetails));
        toast.success('Đã thêm sản phẩm vào giỏ hàng!');
      } catch (err) {
        toast.error('Có lỗi xảy ra khi thêm vào giỏ hàng. Vui lòng thử lại.');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải thông tin sản phẩm...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <p className="text-red-600 font-medium text-lg mb-4">{error}</p>
          <button 
            onClick={() => navigate('/design/mau-co-san')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center mx-auto"
          >
            <FaArrowLeft className="mr-2" />
            Quay lại trang sản phẩm
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Không tìm thấy thông tin sản phẩm</p>
          <button 
            onClick={() => navigate('/design/mau-co-san')}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/design-samples')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Quay lại
        </button>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Hình ảnh sản phẩm */}
            <div className="relative">
              <img
                src={product.image && product.image.startsWith("http") 
                  ? product.image 
                  : `https://phamdangtuc-001-site1.ntempurl.com/uploads/${product.image ? product.image.split("\\").pop() : "fallback-image.jpg"}`}
                alt={product.productName}
                className="w-full h-[500px] object-contain rounded-lg"
                onError={(e) => {
                  console.error("Error loading image:", e);
                  e.target.src = "/fallback-image.jpg";
                }}
              />
            </div>

            {/* Thông tin sản phẩm */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{product.productName}</h1>
              
              <div className="flex items-center space-x-2 text-2xl font-semibold text-indigo-600">
                <FaTag className="text-xl" />
                <span>{product.price.toLocaleString('vi-VN')} VND</span>
              </div>
{/* 
              <div className="flex items-center space-x-2 text-gray-600">
                <FaBox className="text-xl" />
                <span>Còn lại: {product.stockInStorage} sản phẩm</span>
              </div> */}

              {category && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaInfoCircle className="text-xl" />
                  <span>Danh mục: {category.categoryName}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chọn màu áo
                  </label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">-- Chọn màu --</option>
                    {shirtColors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả tùy chỉnh (nếu cần)
                  </label>
                  <textarea
                    value={customDescription}
                    onChange={(e) => setCustomDescription(e.target.value)}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Nhập mô tả tùy chỉnh cho sản phẩm..."
                  />
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
