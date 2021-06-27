import React from "react";
import { Link } from "react-router-dom";

const HoverBottom = () => {
  return (
    <div>
      <ul className="nav-3">
        <li>
          <Link to="/">QUICK VIEW</Link>
        </li>
        <li>
          <Link to="/">ADD TO CARD</Link>
        </li>
      </ul>
    </div>
  );
};

export default HoverBottom;
