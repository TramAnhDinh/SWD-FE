import scollTop from '../assets/slider/banner/scollTop.png';

const ScrollToTopButton = () => {
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4  bg-white  rounded-full border border-gray-300"

      >
        <img src={scollTop} className='h-10 w-10' />
      </button>
    );
  };
  
  export default ScrollToTopButton;
  