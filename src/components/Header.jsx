import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./../assets/chef-1.jpg";
import img2 from "./../assets/chef-2.jpg";
import img3 from "./../assets/chef-3.jpg";
import img4 from "./../assets/chef-4.jpg";
import img5 from "./../assets/chef-5.jpg";
import img6 from "./../assets/chef-6.jpg";
import img7 from "./../assets/chef-7.jpg";
import "./Header.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = () => {
  const sliders = [
    {
      image: img1,
      title: "Chef Image 1",
    },
    {
      image: img2,
      title: "Chef Image 2",
    },
    {
      image: img3,
      title: "Chef Image 3",
    },
    {
      image: img4,
      title: "Chef Image 4",
    },
    {
      image: img5,
      title: "Chef Image 5",
    },
    {
      image: img6,
      title: "Chef Image 6",
    },
    {
      image: img7,
      title: "Chef Image 7",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-152 rounded-2xl"
              src={slider.image}
              alt=""
            />
            {/* <h3 className="text-2xl font-bold text-center">{slider.title}</h3> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Header;
