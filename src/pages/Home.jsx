import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="p-8">
      <div className="mb-8">
        {/* <h2 className="text-4xl mb-4 font-bold">Sản phẩm mới</h2> */}
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

