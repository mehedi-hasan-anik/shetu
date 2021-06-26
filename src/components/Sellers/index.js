import product from "../../Data/MobileData.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import "./Sellers.css";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Star from "../Star";
SwiperCore.use([Pagination, Navigation]);

const Sellers = () => {
  const [mobileItem, setMobile] = useState([]);
  useEffect(() => {
    setMobile(product);
  }, []);

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
                        <ul className="nav-3">
                          <li>
                            <Link to="/">QUICK VIEW</Link>
                          </li>
                          <li>
                            <Link to="/">ADD TO CARD</Link>
                          </li>
                        </ul>
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
                          <ul className="nav-2">
                            <li>
                              <Link to="/">
                                <FontAwesomeIcon icon={faHeart} />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <FontAwesomeIcon icon={faSyncAlt} />
                              </Link>
                            </li>
                          </ul>
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
