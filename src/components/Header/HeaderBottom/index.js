import React from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navigationData from "../../../Data/navigaationData.json";

const HeaderBottom = () => {
  return (
    <div className="full-nav-area">
      <nav class="navbar navbar-expand-lg   container">
        <div class="container-fluid nav-full-area">
          <a class="navbar-brand" href="/">
            <h3>ALL Deparment</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <FontAwesomeIcon icon={faBars} className="nav-bar-icon" />
            </span>
          </button>
          <div
            class="collapse navbar-collapse navigation-area"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {navigationData.map((navigationitem) => (
                <li class="nav-item" key={navigationitem.id}>
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
