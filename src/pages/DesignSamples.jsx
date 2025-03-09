import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart as addToCartAction } from "../redux/slices/cartSlice";
import banner1 from '../assets/slider/b/banner-1.png';
import banner2 from '../assets/slider/b/banner-2.png';
import banner3 from '../assets/slider/b/banner-3.png';
import banner4 from '../assets/slider/b/banner-4.png';
import banner5 from '../assets/slider/b/banner-5.png';
import banner6 from '../assets/slider/b/banner-6.png';

const DesignSamples = () => {
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  const toggleOption = (option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const addToCart = (product) => {
    dispatch(addToCartAction(product));
  };

  const products = [
    { id: 1, name: "9A2 - Huỳnh Tấn Phát", category: "Áo lớp", img: banner1, price: 200000 },
    { id: 2, name: "12T1 - Chuyên Hà Tĩnh", category: "Áo lớp", img: banner2, price: 250000 },
    { id: 3, name: "8A2 - Sài Gòn", category: "Áo nhóm", img: banner3, price: 220000 },
    { id: 4, name: "BA2 - Sài Gòn", category: "Áo công ty", img: banner4, price: 270000 },
    { id: 5, name: "Áo Custom 1", category: "Phụ kiện", img: banner5, price: 180000 },
    { id: 6, name: "Áo Custom 2", category: "Áo thun", img: banner6, price: 230000 },
  ];

  const filters = [
    { name: "PHÂN LOẠI", options: ["Áo lớp", "Áo công ty", "Áo nhóm", "Phụ kiện"] },
    { name: "LOẠI SẢN PHẨM", options: ["Áo Bóng Bầu Dục", "Áo Polo", "Áo Polo Zippy", "Áo thun", "Áo Tie Line Polo", "Bóng chày"] },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = Object.keys(selectedFilters).length === 0 || selectedFilters[product.category];
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6">
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Tìm kiếm thiết kế"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mb-4 rounded-md text-black focus:outline-none"
          />
          {filters.map((filter, index) => (
            <div key={index} className="mb-4">
              <button 
                className="w-full text-left bg-[#1f1f1f] p-2 rounded-md mb-2 hover:bg-[#333] transition-colors" 
                onClick={() => toggleFilter(filter.name)}
              >
                {filter.name} {openFilter === filter.name ? "-" : "+"}
              </button>
              {openFilter === filter.name && (
                <ul className="pl-4">
                  {filter.options.map((option, i) => (
                    <li key={i} className="py-1 flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedFilters[option] || false} 
                        onChange={() => toggleOption(option)} 
                        className="mr-2"
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="col-span-4 grid grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#1f1f1f] p-4 rounded-md shadow-md hover:scale-105 transition-transform"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-md mb-2 hover:opacity-80 transition-opacity"
                />
                <h3 className="text-center text-xl mb-2">{product.name}</h3>
                <p className="text-center text-lg font-semibold mb-2">{product.price.toLocaleString()} VND</p>
                <button 
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition-colors" 
                  onClick={() => addToCart(product)}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-400">Không tìm thấy sản phẩm nào</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignSamples;