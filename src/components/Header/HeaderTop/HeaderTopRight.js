import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const HeaderTopRight = () => {
  return (
    <div>
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
  );
};

export default HeaderTopRight;
