import React from "react";
import "./ProductCategory.css";
import Deals from "../Deals";
import Sellers from "../Sellers";

const ProductCategory = () => {
  return (
    <div className="full-product-category">
      <div className="container">
        <div className="row">
          <div className="col-md-3 pe-3">
            <Deals />
          </div>
          <div className="col-md-9 ps-3">
            <Sellers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
