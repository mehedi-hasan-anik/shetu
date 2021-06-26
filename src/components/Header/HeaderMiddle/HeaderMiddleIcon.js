import React from "react";
import HeaderMiddlePhoto2 from "../../Image/products/mobile/24.png";
import HeaderMiddlePhoto3 from "../../Image/products/mobile/23.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const HeaderMiddleIcon = () => {
  return (
    <div>
      <ul className="header-nav pull-right">
        <li className="hnav-li">
          <a
            href="/"
            data-toggle="tooltip"
            data-placement="left"
            title=""
            data-original-title="Wishlist"
          >
            <FontAwesomeIcon icon={faHeart} className="extra-icon" />
            <span className="icon-tips">5</span>
          </a>
        </li>
        <li className="dropdown hnav-li">
          <a
            href="/"
            className="dropdown-toggle"
            data-toggle="dropdown"
            data-hover="dropdown"
            data-close-others="false"
          >
            <FontAwesomeIcon icon={faShoppingBag} className="extra-icon" />
            <div className="nav-label">
              <span className="icon-tips">3</span>
              <i className="fa fa-angle-down ml-5"></i>
            </div>
          </a>
          <ul className="dropdown-menu cart w-250 shopping-cart" role="menu">
            <li className="shopping-cart-header">
              <i className="flaticon-shopping-bag extra-icon"></i>
              <span className="badge">3</span>
              <div className="shopping-cart-total">
                <span className="lighter-text">Total:</span>
                <span className="main-color-text">$2,229.97</span>
              </div>
            </li>
            <li className="clearfix">
              <img src={HeaderMiddlePhoto2} alt="item1" />
              <span className="item-name">Samsung Gallexy A30</span>
              <span className="item-price">$849.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>
            <li className="clearfix">
              <img src={HeaderMiddlePhoto2} alt="item1" />
              <span className="item-name">Xiaomi Note5 8A</span>
              <span className="item-price">$1,249.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>
            <li className="clearfix">
              <img src={HeaderMiddlePhoto3} alt="item1" />
              <span className="item-name">Xiaomi Note6 7A</span>
              <span className="item-price">$129.99</span>
              <span className="item-quantity">Quantity: 01</span>
            </li>
            <li className="text-center">
              <a href="cart.html" className="shopping-cart-btn">
                View Cart
              </a>
              <a href="checkout.html" className="shopping-cart-btn">
                Checkout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMiddleIcon;
