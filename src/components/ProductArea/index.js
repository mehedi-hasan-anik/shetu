import product from "../../data/MobileData.json";
import { Link } from "react-router-dom";
import "./ProductArea.css";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Star from "../Star";
import HoverContent from "./HoverContent";
SwiperCore.use([Pagination, Navigation]);

const ProductArea = () => {
  const [mobileItem, setMobile] = useState([]);
  useEffect(() => {
    setMobile(product);
  }, []);

  const swiperRef = useRef(null);

  return (
    <div className="myslider">
      <div className="container">
        <div className="top-text-area">
          <h4>TOP FEATURES</h4>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          loop={true}
          className="mySwiper"
        >
          {mobileItem.map((product) => (
            <div className="full-product-area" key={product.id}>
              <SwiperSlide>
                <div className="product-area-slide">
                  <div className="single-slide ">
                    <div className="photo-area">
                      <img src={product.image} className="img-fluid" alt="" />
                    </div>
                    <div className="text-area">
                      <p>{product.subTitle}</p>
                      <Link to="/">{product.title}</Link>
                      <div className="icon-area">
                        <Star />
                      </div>
                      <div className="price-area">
                        <p className="product_cost">
                          $375.00 <del className="ml-5">$399.00</del>
                        </p>
                        <div className="hover_content">
                          <HoverContent />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductArea;
