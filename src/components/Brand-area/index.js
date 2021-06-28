import "./Brand.css";
import React, { useRef } from "react";
import brandData from "../../data/brandData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const Brand = () => {
  const swiperRef = useRef(null);

  return (
    <div id="navigaiton">
      <div className=" band-area">
        <div className=" ">
          <div className="inner-band-area">
            <Swiper
              ref={swiperRef}
              slidesPerView={6}
              spaceBetween={0}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              loop={true}
              className="mySwiper"
            >
              {brandData.map((singleImage) => (
                <SwiperSlide key={singleImage.id}>
                  <div className="image-area">
                    <img src={singleImage.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
