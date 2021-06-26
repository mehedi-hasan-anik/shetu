import React from "react";
import HeaderMiddlePhoto from "../../Image/logo.png";
import { Link } from "react-router-dom";

const HeaderMiddleLogo = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <img src={HeaderMiddlePhoto} className="img-responsive" alt="" />
      </Link>
    </div>
  );
};

export default HeaderMiddleLogo;
