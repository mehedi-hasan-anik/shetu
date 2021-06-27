import React from "react";
import "./HeaderMiddle.css";
import HeaderMiddleForm from "./HeaderMiddleForm";
import HeaderMiddleIcon from "./HeaderMiddleIcon";
import HeaderMiddleMobile from "./HeaderMiddleMobile";
import HeaderMiddlePhoto from "../../Image/logo.png";
import { Link } from "react-router-dom";

const HeaderMiddle = () => {
  return (
    <div className="middleBar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-8 col-sm-3 col-md-2 col-lg-3 text-left">
            <div className="btnLogo-row">
              <div className="sidebar-toggle-btn">
                <button type="button" id="sidebarCollapse" className="btn">
                  <i className="lnr lnr-menu"></i>
                </button>
              </div>
              <div className="header-logo">
                <Link to="/">
                  {" "}
                  <img
                    src={HeaderMiddlePhoto}
                    className="img-responsive"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-8 col-lg-6 text-center hidden-xs">
            <HeaderMiddleForm />
          </div>
          <div className="col-xs-4 col-sm-2 col-md-2 col-lg-3 text-right">
            <HeaderMiddleIcon />
          </div>
        </div>
        <div className="row mobile-search">
          <HeaderMiddleMobile />
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
