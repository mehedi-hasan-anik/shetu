import "./Brand.css";
import Band1 from "../Image/band/01.png";
import Band2 from "../Image/band/02.png";
import Band3 from "../Image/band/03.png";
import Band4 from "../Image/band/04.png";
import Band5 from "../Image/band/05.png";
import Band6 from "../Image/band/06.png";
import Band7 from "../Image/band/07.png";
import Band8 from "../Image/band/08.png";
import Band9 from "../Image/band/09.png";
import Band10 from "../Image/band/10.png";
import Band11 from "../Image/band/11.png";
import Band12 from "../Image/band/12.png";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const Brand = () => {
  const allImage = [
    {
      id: "1",
      image: Band1,
    },
    {
      id: "2",
      image: Band2,
    },
    {
      id: "3",
      image: Band3,
    },
    {
      id: "4",
      image: Band4,
    },
    {
      id: "5",
      image: Band5,
    },
    {
      id: "6",
      image: Band6,
    },
    {
      id: "7",
      image: Band7,
    },
    {
      id: "8",
      image: Band8,
    },
    {
      id: "9",
      image: Band9,
    },
    {
      id: "10",
      image: Band10,
    },
    {
      id: "11",
      image: Band11,
    },
    {
      id: "12",
      image: Band12,
    },
  ];

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
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {allImage.map((event) => (
                <SwiperSlide>
                  <div className="image-area">
                    <img src={event.image} alt="" />
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
