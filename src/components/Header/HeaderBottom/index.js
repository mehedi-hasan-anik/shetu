import React from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderBottom = () => {
  const fullNavigation = [
    {
      name: "Home",
      id: "1",
    },
    {
      name: "Category",
      id: "2",
    },
    {
      name: "Cart",
      id: "3",
    },
    {
      name: "Checkout",
      id: "4",
    },
    {
      name: "ProductDetails",
      id: "5",
    },
    {
      name: "LifeStyle",
      id: "6",
    },
  ];
  return (
    <div className="full-nav-area">
      <nav className="navbar navbar-expand-lg   container">
        <div className="container-fluid nav-full-area">
          <a className="navbar-brand" href="/">
            <h3>All Departments</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
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
              {fullNavigation.map((event) => (
                <Link
                  className="nav-link ms-3"
                  key={event.id}
                  to={`/${event.id}`}
                >
                  {event.name}
                </Link>
              ))}
            </ul>
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/">
                  Checkout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/">
                  ProductDetails
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/">
                  lifeStyle
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottom;
