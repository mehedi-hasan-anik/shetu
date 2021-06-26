import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const HeaderTop = () => {
  return (
    <nav className="topBar hidden-xs">
      <div className="container">
        <ul className="list-inline pull-left">
          <li>Call +120 558 7885</li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Register</a>
          </li>
        </ul>
        <ul className="list-inline pull-right social_topBar">
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderTop;
