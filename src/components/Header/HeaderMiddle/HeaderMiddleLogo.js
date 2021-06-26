import React from "react";
import HeaderMiddlePhoto from "../../Image/logo.png";

const HeaderMiddleLogo = () => {
  return (
    <div>
      <a href="index.html">
        <img src={HeaderMiddlePhoto} className="img-responsive" alt="" />
      </a>
    </div>
  );
};

export default HeaderMiddleLogo;
