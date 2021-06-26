import React from "react";
import "./style.css";
import HeaderTopLeft from "./HeaderTopLeft";
import HeaderTopRight from "./HeaderTopRight";

const HeaderTop = () => {
  return (
    <nav className="topBar hidden-xs">
      <div className="container">
        <div className="header-top-left">
          <HeaderTopLeft />
        </div>
        <div className="header-top-right">
          <HeaderTopRight />
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
