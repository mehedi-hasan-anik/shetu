import React from "react";
import { Link } from "react-router-dom";

const HeaderTopLeft = () => {
  return (
    <div>
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
    </div>
  );
};

export default HeaderTopLeft;
