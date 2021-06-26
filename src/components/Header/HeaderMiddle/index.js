import React from "react";
import "./HeaderMiddle.css";
import HeaderMiddlePhoto from "../../Image/logo.png";
import HeaderMiddlePhoto2 from "../../Image/products/mobile/24.png";
import HeaderMiddlePhoto3 from "../../Image/products/mobile/23.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const HeaderMiddle = () => {
  return (
    <div className="middleBar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-8 col-sm-3 col-md-2 col-lg-3 text-left">
            <div className="btnLogo-row">
              <div className="sidebar-toggle-btn">
                <button type="button" id="sidebarCollapse" className="btn">
                  <i className="lnr lnr-menu"></i>
                </button>
              </div>
              <div className="header-logo">
                <a href="index.html">
                  <img
                    src={HeaderMiddlePhoto}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </div>
              {/* <!-- /.End of Logo --> */}
            </div>
          </div>
          <div className="col-sm-7 col-md-8 col-lg-6 text-center hidden-xs">
            <form className="navbar-search" method="get" action="#">
              <div className="input-group input-group-area">
                <input
                  type="text"
                  id="search"
                  className="form-control search-field product-search-field"
                  dir="ltr"
                  value=""
                  name="s"
                  placeholder="Search for products, brands and categories"
                />
                <div className="input-group-addon search-categories hidden-sm">
                  <select
                    name="product_cat"
                    id="product_cat"
                    className="postform resizeselect"
                    style={{ width: "101px" }}
                  >
                    <option value="0" selected="selected">
                      All Categories
                    </option>
                    <option value="television">Televisions</option>
                    <option value="home-theater-audio">
                      Home Theater &amp; Audio
                    </option>
                    <option value="headphones">Headphones</option>
                    <option value="digital-cameras">Digital Cameras</option>
                    <option value="cells-tablets">Cells &amp; Tablets</option>
                    <option value="smartwatches">Smartwatches</option>
                    <option value="games-consoles">Games &amp; Consoles</option>
                    <option value="printer">Printer</option>
                    <option value="tv-video">TV &amp; Video</option>
                    <option value="home-entertainment">
                      Home Entertainment
                    </option>
                    <option value="tvs">TVs</option>
                    <option value="speakers">Speakers</option>
                    <option value="computers-laptops">
                      Computers &amp; Laptops
                    </option>
                    <option value="laptops">Laptops</option>
                    <option value="ultrabooks">Ultrabooks</option>
                    <option value="notebooks">Notebooks</option>
                    <option value="desktop-pcs">Desktop PCs</option>
                    <option value="mac-computers">Mac Computers</option>
                    <option value="all-in-one-pc">All in One PC</option>
                    <option value="audio-music">Audio &amp; Music</option>
                    <option value="pc-components">PC Components</option>
                    <option value="speaker-systems">Speaker Systems</option>
                    <option value="speaker-systems-headphones">
                      Speaker Systems
                    </option>
                    <option value="virtual-reality">Virtual Reality</option>
                  </select>
                </div>
                <div className="input-group-btn">
                  <input
                    type="hidden"
                    id="search-param"
                    name="post_type"
                    value="product"
                  />
                  <button type="submit" className="btn searchBtn">
                    <span>
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xs-4 col-sm-2 col-md-2 col-lg-3 text-right">
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
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="extra-icon"
                  />
                  <div className="nav-label">
                    <span className="icon-tips">3</span>
                    <i className="fa fa-angle-down ml-5"></i>
                  </div>
                </a>
                <ul
                  className="dropdown-menu cart w-250 shopping-cart"
                  role="menu"
                >
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
                {/* <!--/. End of shopping cart --> */}
              </li>
            </ul>
            {/* <!--  /.End of Header Nav --> */}
          </div>
        </div>
        <div className="row mobile-search">
          <div className="col-xs-12">
            <div className="form-group has-feedback has-search">
              <span className="glyphicon glyphicon-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>
        </div>
        {/* <!-- /. End of mobile search area --> */}
      </div>
    </div>
  );
};

export default HeaderMiddle;
