import React from "react";
import "./style.css";
import CarouselPhoto1 from "../Image/slider/2.jpg";
import CarouselPhoto2 from "../Image/slider/3.jpg";
import CarouselPhoto3 from "../Image/slider/4.jpg";

const index = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={CarouselPhoto1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselPhoto2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={CarouselPhoto3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default index;
