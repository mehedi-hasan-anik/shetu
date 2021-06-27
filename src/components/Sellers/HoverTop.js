import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const HoverTop = () => {
  return (
    <div>
      <ul className="nav-2">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHeart} />
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

export default HoverTop;
