import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <nav className="topBar hidden-xs">
      <div className="container">
        <ul className="list-inline pull-left">
          <li>Call +120 558 7885</li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/">Register</Link>
          </li>
        </ul>
        <ul className="list-inline pull-right social_topBar">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderTop;
