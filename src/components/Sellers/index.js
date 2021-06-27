import mobileItem from "../../Data/MobileData.json";
import { Link } from "react-router-dom";
import "./Sellers.css";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Star from "../Star";
import HoverTop from "./HoverTop";
import HoverBottom from "./HoverBottom";
SwiperCore.use([Pagination, Navigation]);

const Sellers = () => {
  const swiperRef = useRef(null);
  return (
    <div className="full-sellers-area">
      <div className="full-sellers-area-top">
        <h4>Best Sellers</h4>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        {mobileItem.map((product) => (
          <div key={product.id} className="full-sellers-area-bottom">
            <div className="inner-full-sellers-area-bottom">
              <SwiperSlide>
                <div className="second-slider">
                  <div className="single-slide ">
                    <div className="photo-area2">
                      <img src={product.image} className="img-fluid" alt="" />
                      <div className="hover_content-3">
                        <HoverBottom />
                      </div>
                    </div>
                    <div className="sellers-text-area">
                      <div className="icon-area">
                        <Star />
                      </div>
                      <Link to="/" className="sellers-text-area-title">
                        {product.title}
                      </Link>
                      <div className="price-area">
                        <p className="product_cost">
                          ${product.price}{" "}
                          <del className="ml-5">${product.deletePrice}</del>
                        </p>
                        <div className="hover_content-2">
                          <HoverTop />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Sellers;
