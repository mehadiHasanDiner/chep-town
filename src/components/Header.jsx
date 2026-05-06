import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./../assets/chef-1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = () => {
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
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide #2</SwiperSlide>
        <SwiperSlide>Slide #3</SwiperSlide>
        <SwiperSlide>Slide #4</SwiperSlide>
        <SwiperSlide>Slide #5</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
