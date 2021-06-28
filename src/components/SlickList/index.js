import React from "react";
import "./SlickList.css";
import slickData from "../../data/slickData.json";
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
        {slickData.map((slickphoto) => (
          <SwiperSlide key={slickphoto.id}>
            <div className="slick-list-photo">
              <img src={slickphoto.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlickList;
