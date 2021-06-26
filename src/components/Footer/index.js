import React from "react";
import "./Footer.css";
import About from './About'
import Communities from "./Communities";
import Information from "./Information";
import AppQrCode from "./AppQrCode";
import DownloadTheApp from "./DownloadTheApp";

const Footer = () => {
  return (
    <footer className="big-footer">
      <div className="container">
        <div className="page-scroll back-top" data-section="/top">
          <i className="lnr lnr-chevron-up"></i>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <About/>
          </div>
          <div className="col-sm-7 col-sm-offset-1 hidden-xs">
            <div className="row">
              <div className="col-md-4 hidden-sm">
                <Communities/>
              </div>
              <div className="col-md-4 col-sm-6">
                <Information/>
              </div>
              <div className="col-md-4 col-sm-6">
                <AppQrCode/>
              </div>
            </div>
          </div>
        </div>
        <div className="app-download">
          <DownloadTheApp/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
