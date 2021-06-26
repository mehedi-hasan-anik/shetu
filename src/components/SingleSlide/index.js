import React from "react";
import "./SingleSlide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faStar,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const SingleSlide = ({ image, title, subTitle, price, deletePrice }) => {
  return (
    <div>
      <div className="single-slide ">
        <div className="photo-area">
          <img src={image} className="img-fluid" alt="" />
          <div className="hover_content-3">
            <ul className="nav-3">
              <li>
                <a href="/">QUICK VIEW</a>
              </li>
              <li>
                <a href="/">ADD TO CARD</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-area">
          <p>{subTitle}</p>
          <a href="/">{title}</a>
          <div className="icon-area">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="price-area">
            <p className="product_cost">
              $375.00 <del className="ml-5">$399.00</del>
            </p>

            <div className="hover_content">
              <ul className="nav">
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hover_content-2">
              <ul className="nav-2">
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlide;
