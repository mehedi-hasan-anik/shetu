import React from 'react';
import { Link } from "react-router-dom";
import './Information.css';

const Information = () => {
    return (
        <div>
             <div className="footer-box">
                  <h4 className="footer-title">Information</h4>
                  <ul className="footer-category">
                    <li>
                      <Link to="/">
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>Track My Order</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>Terms &amp; Conditions</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>FAQ</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                </div>
        </div>
    );
};

export default Information;