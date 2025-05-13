import React from "react";
import logo from "../assets/logo.png";
import facebook from '../assets/slider/banner/facebook.png'
import intagram from '../assets/slider/banner/intagram.png'
import email from '../assets/slider/banner/email.png'

const Footer = () => {
  return (
    <footer className="bg-[#e8ac2c] text-black py-10">
      <div className="max-w mx-auto px-4 flex flex-wrap justify-between gap-6">

        {/* Cột 1: Thông tin công ty */}
        <div className="w-full md:w-1/3 lg:w-2/6 text-center lg:text-left flex ">
          <div className="">
            <img src={logo} alt="Potato Clothing" className="w-56 mx-auto lg:mx-0 mb-2" />
          </div>
          <div className="w-80 ml-20">
            <h3 className="font-bold text-lg">CÔNG TY TNHH DECAL POTATO</h3>
            <p>MST: 0215721565</p>
            <p>📍 32 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Quận 3, TP.HCM</p>
            <p>📞 098 608 6487</p>
            <p>✉ info@potato.decal</p>
            <div className="mt-3 text-sm">
              <a href="#" className="hover:underline">Điều khoản sử dụng</a> |
              <a href="#" className="hover:underline"> Chính sách bảo mật</a> |
              <a href="#" className="hover:underline"> Chính sách đổi trả</a>
            </div>
          </div>
        </div>

        {/* Cột 2: Bản đồ */}
        <div className="w-full md:w-1/3 lg:w-2/6 text-center">
          <h3 className="font-bold text-lg mb-2">BẢN ĐỒ</h3>
          <iframe
            className="w-full h-40 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.459351589249!2d106.68446373400755!3d10.776080926977688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b204f0e0b%3A0x45a1a4fc8d094d7b!2zMTIgQsOgIEh1eeG7h24gVGhhbmggUXVhbiwgUGjGsOG7nW5nIDYsIFF14bqtbiAzLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1741278057658!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>

        {/* Cột 3: Đồng phục */}
        <div className="w-full md:w-1/2 lg:w-1/6 text-center">
          <h3 className="font-bold text-lg mb-2">LIÊN HỆ </h3>
          <div className="flex justify-center space-x-3">
            <a href="#" className="text-blue-600 text-2xl">
              <img
                src={facebook} alt="facebook" className="w-10 mx-auto lg:mx-0 mb-2"
              />
            </a>
            <a href="#" className="text-blue-600 text-2xl">
              <img
                src={intagram} alt="facebook" className="w-10 mx-auto lg:mx-0 mb-2"
              />
            </a>
            <a href="#" className="text-blue-600 text-2xl">
              <img
                src={email} alt="facebook" className="w-10 mx-auto lg:mx-0 mb-2"
              />
            </a>
          </div>
         
          <div className="mt-2">
         
        
          </div>
        </div>

        {/* Cột 4: Bán lẻ */}

      </div>
    </footer>
  );
};

export default Footer;
