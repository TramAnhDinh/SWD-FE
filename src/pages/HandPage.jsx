import React, { useState } from "react";
import { Link } from "react-router-dom";
import r1 from "../assets/r/r1.png";
import r2 from "../assets/r/r2.png";
import r3 from "../assets/r/r3.png";

const categories = ["Thông tin", "Áo Lớp", "Cẩm Nang"];

const articles = [ 
  { id: 1, title: "Hướng dẫn bảo quản vợt pickleball đúng cách", image: r1, category: "Áo Lớp" },
  { id: 2, title: "Cách bảo quản áo lớp bền đẹp theo thời gian", image: r2, category: "Áo Lớp" },
  { id: 3, title: "Kinh nghiệm chọn màu áo lớp đẹp dành cho các bạn học sinh", image: r3, category: "Cẩm Nang" },
];

const HandPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Thông tin");

  const filteredArticles =
    selectedCategory === "Thông tin"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Danh mục */}
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">CẨM NANG</h2>
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

        {/* Danh sách bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-semibold text-yellow-400">{article.title}</h3>
              <Link
                to={`/blog/b/${article.id}`}
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

export default HandPage;
