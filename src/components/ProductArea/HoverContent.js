import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const HoverContent = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faSyncAlt} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HoverContent;
