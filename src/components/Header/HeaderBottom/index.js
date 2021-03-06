import React from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navigationData from "../../../data/navigaationData.json";

const HeaderBottom = () => {
  return (
    <div className="full-nav-area">
      <nav className="navbar navbar-expand-lg   container">
        <div className="container-fluid nav-full-area">
          <a className="navbar-brand" href="/">
            <h3>ALL Deparment</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon icon={faBars} className="nav-bar-icon" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse navigation-area"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navigationData.map((navigationitem) => (
                <li className="nav-item" key={navigationitem.id}>
                  <Link className="nav-link ms-3" to="/">
                    {navigationitem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottom;
