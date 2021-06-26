import React from 'react';
import './Communities.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Communities = () => {
    return (
        <div>
             <div className="footer-box">
                  <h4 className="footer-title">Our Communities</h4>
                  <ul className="footer-category social-link">
                    <li>
                      <Link to="/">
                      <div className="d-flex align-items-cente">
                      <div>
                        <FontAwesomeIcon
                            className="icon active-icon facebook"
                            icon={faFacebookF}
                            size="10px"
                        />
                      </div>
                        <div>
                          <span>Facebook</span>
                        </div>
                      </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                       <div className="d-flex align-items-cente">
                       <div>
                        <FontAwesomeIcon
                          className="icon active-icon twitter"
                          icon={faTwitter}
                        />
                        </div>
                       <div>
                       <span>Twitter</span>
                       </div>
                       </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                       <div className="d-flex align-items-cente">
                       <div>
                        <FontAwesomeIcon
                          className="icon active-icon instagram"
                          icon={faInstagram}
                        />
                        </div>
                        <div>
                        <span>Instagram</span>
                        </div>
                       </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                       <div className="d-flex align-items-cente">
                       <div>
                        <FontAwesomeIcon
                          className="icon active-icon linkedin"
                          icon={faLinkedin}
                        />
                        </div>
                        <div>
                        <span>Linkedin</span>
                        </div>
                       </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                       <div className="d-flex align-items-cente">
                       <div>
                        <FontAwesomeIcon
                          className="icon active-icon youtube"
                          icon={faYoutube}
                        />
                        </div>
                       <div>
                       <span>Youtube</span>
                       </div>
                       </div>
                      </Link>
                    </li>
                  </ul>
                </div>
        </div>
    );
};

export default Communities;