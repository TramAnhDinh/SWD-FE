import React, { useState } from "react";
import { Link } from "react-router-dom";
import b1 from "../assets/slider/b/b1.png";
import b2 from "../assets/slider/b/b2.png";
import b3 from "../assets/slider/b/b3.png";

const categories = ["Thông tin", "Áo Lớp", "Cẩm Nang"];

const articles = [
  {
    id: 1,
    title: "Lý Do Nên Đặt Áo Nhóm Câu Lạc Bộ Tại Potato Clothing?",
    image: b1,
    category: "Áo Lớp",
    description: "Áo nhóm không chỉ là đồng phục thông thường mà còn là biểu tượng của sự gắn kết...",
  },
  {
    id: 2,
    title: "Áo Sweater Là Gì? Cách Phối Đồ Với Áo Sweater Cực Thời Trang",
    image: b2,
    category: "Cẩm Nang",
    description: "Áo sweater là món đồ thời trang không thể thiếu, giúp bạn phối đồ linh hoạt hơn...",
  },
  {
    id: 3,
    title: "Tại Sao Đồng Phục Potato Clothing Giá Cao?",
    image: b3,
    category: "Áo Lớp",
    description: "Các yếu tố làm nên chất lượng đồng phục của Potato Clothing luôn đặt lên hàng đầu...",
  },
];

const InfoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Thông tin");

  const filteredArticles =
    selectedCategory === "Thông tin"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">THÔNG TIN</h2>
        <div className="flex justify-center space-x-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded text-black font-bold transition ${
                selectedCategory === category ? "bg-yellow-600" : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-semibold text-yellow-400">{article.title}</h3>
              <p className="text-gray-400 mt-2">{article.description}</p>
              <Link
                to={`/blog/${article.id}`}
                className="block mt-3 px-3 py-2 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-600 w-full text-center"
              >
                Đọc tiếp
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
