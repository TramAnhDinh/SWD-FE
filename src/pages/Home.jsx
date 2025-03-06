import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import CustomSlider from '../components/slider/Slider'

import images from '../data/ImageSlider';
import ProductGrid from '../components/slider/ProductGrid';
import ProductGrid2 from '../components/slider/ProductGrid2';
import FeedbackSlider from '../components/slider/Slider2';
import FloatingContactButtons from '../components/FloatingContactButtons ';


const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="bg-black">
      <div>
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>

      </div>
      {/* <div className="mb-8">
        {/* <h2 className="text-4xl mb-4 font-bold">Sản phẩm mới</h2> */}


      {/* 
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      <div className='py-10 py-20'>
        <h2 className='text-center text-3xl font-black text-white font-sans'>CHÚNG TÔI LƯU GIỮ KỶ NIỆM CỦA BẠN TRÊN CHIẾC ÁO PHÔNG</h2>
        <div className="bg-black min-h-screen flex items-center justify-center">
          <ProductGrid />
        </div>
        <div className='py-10'>
          <h2 className='text-center text-3xl font-black text-white font-sans'>SẢN XUẤT ĐỒNG PHỤC</h2>
          <div className="border-t-2 border-white  w-64 my-3 mx-auto"></div>
          <h2 className='text-center text-l  text-white font-sans'>Potato Clothing thiết kế và sản xuất nhiều loại sản phẩm đồng phục thẩm mỹ, chất lượng.</h2>
          <ProductGrid2 />

        </div>
        <div className='pb-10'>
        <h2 className='text-center text-3xl font-black text-white font-sans'>PHẢN HỒI KHÁCH HÀNG</h2>
        <div className="border-t-2 border-white  w-64 my-3 mx-auto"></div>
          <FeedbackSlider />
        </div>
      </div>
        <FloatingContactButtons/>
        

    </div>

  );
};

export default Home;

