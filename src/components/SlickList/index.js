import React, { useRef, useState } from "react";
// Import Swiper React components
import './SlickList.css';
import SlickSlidePhoto1 from "../Image/slider/2.jpg";
import SlickSlidePhoto2 from "../Image/slider/3.jpg";
import SlickSlidePhoto3 from "../Image/slider/4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const SlickList = () => {
    return (
        <>
    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
            <SwiperSlide><img src={SlickSlidePhoto1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={SlickSlidePhoto2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={{SlickSlidePhoto3}} alt="" /></SwiperSlide>
  </Swiper>
    </>
    );
};

export default SlickList;