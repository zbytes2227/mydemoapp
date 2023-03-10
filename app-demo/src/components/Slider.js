import React from "react";
import "../style.css";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active carousel-div" data-bs-interval="3000">
            <img
              src="./images/0000e.jpg"
              className="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div className="carousel-item carousel-div" data-bs-interval="3000">
            <img
              src="./images/imgS1.jpg"
              className="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div className="carousel-item carousel-div" data-bs-interval="3000">
            <img
              src="./images/91991.jpg"
              className="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
