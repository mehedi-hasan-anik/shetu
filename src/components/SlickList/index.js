import React from "react";
import "./SlickList.css";
import SlickSlidePhoto3 from "../Image/slider/2.jpg";
import SlickSlidePhoto1 from "../Image/slider/3.jpg";
import SlickSlidePhoto2 from "../Image/slider/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/core";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const SlickList = () => {
  const Slicks = [
    {
      id: "1",
      img: SlickSlidePhoto2,
    },
    {
      id: "2",
      img: SlickSlidePhoto1,
    },
    {
      id: "3",
      img: SlickSlidePhoto3,
    },
  ];
  return (
    <div className="slick-list">
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        {Slicks.map((slickphoto) => (
          <SwiperSlide>
            <div className="slick-list-photo">
              <img src={slickphoto.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlickList;
