import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/27Rj9hJH/two.jpg",
    title: "Keep Your Pets Warm This Winter",
    subtitle: "Cozy coats, gentle care, and endless cuddles await.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/sdZ52TWQ/one.jpg",
    title: "Winter Wellness for Every Paw",
    subtitle: "From checkups to paw balms — full seasonal care.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/VpCh2hGv/three.jpg",
    title: "Style Meets Comfort",
    subtitle: "Trendy, warm outfits your furry friends will love.",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-[80-vh] md:px-2 rounded-lg overflow-hidden relative z-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero min-h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay bg-linear-to-t from-[#F9E9E0]/80 via-[#FBB78D]/40 to-transparent"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-3xl md:text-6xl 2xl:text-7xl font-bold text-white drop-shadow-lg fontBricolage">
                    {slide.title}
                  </h1>
                  <p className="mb-6 text-lg text-gray-100">
                    {slide.subtitle}
                  </p>
                  <button className="btn btn-primary text-white bg-[#f8721fc0]  border-none hover:bg-[#f8721f]">
                    Explore Services
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
