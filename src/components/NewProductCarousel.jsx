import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import product from '../data/Product';

const NewProductCarousel = () => {
  return (
    <div className="bg-white py-6 px-4 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Sản phẩm mới</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        className="w-full"
      >
        {product.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded-md" />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-red-500 font-bold">{product.price} USD</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProductCarousel;
