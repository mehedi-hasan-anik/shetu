import React from 'react';
import './AppQrCode.css';
import { Link } from "react-router-dom";
import FooterPhoto2 from "../../Image/barcode.jpg";

const AppQrCode = () => {
    return (
        <div>
             <div className="footer-box">
                  <h4 className="footer-title">App QR Code</h4>
                  <div className="footer-category">
                    <Link to="https://play.google.com/store/apps/details?id=com.bdtask.isshue&amp;site=http://isshue.bdtask.com/isshue-v1.5/&amp;valid=Isshue">
                      <img
                        src={FooterPhoto2}
                        className="img img-responsive"
                        title="App QR Code"
                        style={{ height: "180px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
        </div>
    );
};

export default AppQrCode;