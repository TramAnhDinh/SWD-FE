import React from 'react';
import phone from '../assets/slider/banner/phone.png'
import meseger from '../assets/slider/banner/meseger.png'
import ScrollToTopButton from './ScrollToTopButton ';

const FloatingContactButtons = () => {
  return (
    <div className="fixed right-4 bottom-14 flex flex-col gap-3 z-50">
      {/* Messenger Button */}
      <a 
        href="https://m.me/yourpageusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="bg-blue-500 rounded-full p-2">
        <img src={meseger} alt='phone' className='w-6 h-6'/>
        </div>
        <span className="ml-2 mr-2 text-gray-700 font-medium">Messenger</span>
      </a>

      {/* Zalo Button */}
      <a 
        href="https://zalo.me/yourphonenumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="bg-blue-400 rounded-full p-2 flex items-center justify-center" style={{ width: '36px', height: '36px' }}>
          <span className="text-white font-bold text-sm">Zalo</span>
        </div>
        <span className="ml-2 mr-2 text-gray-700 font-medium">Chat Zalo</span>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:078608494" 
        className="flex items-center bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="bg-blue-500 rounded-full p-2">
          <img src={phone} alt='phone' className='w-6 h-6'/>
        </div>
        <span className="ml-2 mr-2 text-gray-700 font-medium">Phone</span>
      </a>
      <div className=''>
      <ScrollToTopButton/>
      </div>
      
    </div>
  );
};

export default FloatingContactButtons;