import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Deals.css";
import product from "../../Data/MobileData.json";
import Star from "../Star";

const Deals = () => {
  const [mobileItem, setMobile] = useState([]);
  useEffect(() => {
    setMobile(product);
  }, []);
  return (
    <div className="deals-area">
      <div className="container">
        <h4>Best Deals</h4>
        <div className="inner-deals-area">
          {mobileItem.slice(0, 4).map((product) => (
            <div key={product.id}>
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center  deals-area-image">
                  <div>
                    <img src={product.image} alt="" />
                  </div>
                </div>
                <div className="col-md-8 deals-area-text">
                  <Link to="/">{product.title}</Link>
                  <p className="product_cost">
                    ${product.price}{" "}
                    <del className="ml-5">${product.deletePrice}</del>
                  </p>
                  <div className="deals-area-icon">
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
