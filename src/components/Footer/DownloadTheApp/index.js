import React from 'react';
import './DownloadTheApp.css';
import FooterPhoto3 from "../../Image/play-store-1.png";
import FooterPhoto4 from "../../Image/play-store-2.png";

const DownloadTheApp = () => {
    return (
        <div>
            <div className="row">
            <div className="col-sm-12">
              <div className="footer-title2">
                <hr />
                <h4>Download The App</h4>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="app-text">
                <p>
                  Get access to all exclusive offers, discounts and deals by
                  downloading Cena App !
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="apps pull-right">
                <a href="/">
                  <img src={FooterPhoto3} className="img-responsive" alt="" />
                </a>
                <a href="/">
                  <img src={FooterPhoto4} className="img-responsive" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default DownloadTheApp;