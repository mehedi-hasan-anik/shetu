import React from "react";
import { Link } from "react-router-dom";

const AdvertiseItem = ({ image }) => {
  return (
    <div>
      {/* <a href="/"><img src={image} className="img-fluid" alt="" /></a> */}
      <Link to="/">
        <img src={image} className="img-fluid" alt="" />
      </Link>
    </div>
  );
};

export default AdvertiseItem;
