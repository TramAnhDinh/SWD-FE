import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "../../assets/slider/banner/banner_ph_2.png";
import banner2 from "../../assets/slider/banner/banner_ph_3.png";
import banner3 from "../../assets/slider/banner/banner_ph_4.png";
import banner4 from "../../assets/slider/banner/banner_ph_5.png";


const data = [
  {
    id: 1,
    img: banner1,
    title: "Công Ty MobiFone",
    content:
      "Đặt đồng phục cho công ty tại Potato Clothing, mình hoàn toàn yên tâm về chất lượng...",
  },
  {
    id: 2,
    img: banner2,
    title: "11A4 - Phan Đình Phùng",
    content:
      "Chất áo 10 điểm không có nhưng, đẹp xuất sắc! Mặc lên chụp kỷ yếu bao đỉnh...",
  },
  {
    id: 3,
    img: banner3,
    title: "12A7 - THPT Trung Vương",
    content:
      "Áo đẹp xuất sắc, form chuẩn. Ưng nhất là tư vấn nhiệt tình, dễ thương cực luôn...",
  },
  {
    id: 4,
    img: banner4,
    title: "12A7 - THPT Trung Vương",
    content:
      "Áo đẹp xuất sắc, form chuẩn. Ưng nhất là tư vấn nhiệt tình, dễ thương cực luôn...",
  },
];

const FeedbackSlider = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }} 

      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-black text-white p-4 rounded-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="font-bold text-lg mt-2 border-t-2 border-white pt-2">
                {item.title}
              </h3>
              <p className="text-sm">{item.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
