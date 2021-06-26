import React from "react";
import { Link } from "react-router-dom";

const AdvertiseItem = ({ image }) => {
  return (
    <div>
      <Link to="/">
        <img src={image} className="img-fluid" alt="" />
      </Link>
    </div>
  );
};

export default AdvertiseItem;
