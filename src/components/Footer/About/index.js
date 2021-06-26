import React from 'react';
import './About.css';
import FooterPhoto1 from "../../Image/logo-white.png";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
             <div className="footer-box">
              <div className="footer-logo">
                <Link to="index.html">
                  {" "}
                  <img src={FooterPhoto1} className="img-responsive" alt="" />
                </Link>
              </div>
              <p>Address: 98 Green Road, Farmgate, Dhaka- 1215,Bangladesh</p>
              <div className="contact_info">
                <span>Mobile: </span>
                <Link to="/">+88-01922-296392</Link>
              </div>
              <div className="contact_info">
                <span>Email: </span>
                <Link to="/">bdtask@gmail.com</Link>
              </div>
              <div className="contact_info">
                <span>Website: </span>
                <Link to="/">https://www.bdtask.com</Link>
              </div>
            </div>
        </div>
    );
};

export default About;