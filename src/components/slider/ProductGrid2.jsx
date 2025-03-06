import banner1 from "../../assets/slider/banner/banner_spdp_1.png";
import banner6 from "../../assets/slider/banner/banner_spdp_1_2.png";
import banner2 from "../../assets/slider/banner/banner_spdp_2.png";
import banner3 from "../../assets/slider/banner/banner_spdp_2_2.png";
import banner4 from "../../assets/slider/banner/banner_spdp_3.png";
import banner5 from "../../assets/slider/banner/banner_spdp_3_2.png";

const images = [
  { src: banner1, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: banner6, colSpan: "col-span-2", rowSpan: "row-span-1" },
  { src: banner3, colSpan: "col-span-2", rowSpan: "row-span-1" },
  
  { src: banner2, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: banner4, colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: banner5, colSpan: "col-span-2", rowSpan: "row-span-1" },
 
];

const ProductGrid2 = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 max-w-screen-xl mx-auto">
      {images.map((img, index) => (
        <div key={index} className={`relative ${img.colSpan} ${img.rowSpan}`}>
          <img src={img.src} alt={`item-${index}`} className="w-full h-full shadow-lg" />
        </div>
      ))}
    </div>
  );
};




export default ProductGrid2;
