import React from "react";
import image1 from "../images/topv1.jpg";
import image2 from "../images/topv2.jpg";
import image3 from "../images/topv3.jpg";
import "./slider.css";
export default function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className=" c-item carousel-item active" data-bs-interval="5000">
          <img src={image1} className="d-block w-100 c-img" alt="..." />
          <div className="carousel-caption">
            <h1 className="mt-5 mb-4">Butter Chicken Bliss</h1>
            <hr
              id="horizontal-line"
              className="w-25  m-auto border-3 solid white"
            />
            <p className="bottom-0 mt-4">
              Taste the iconic Indian favorite, Butter Chicken, at Zaffran.
            </p>{" "}
            <p>
              Tender pieces of tandoori chicken simmered in a velvety
              tomato-based gravy{" "}
            </p>
            <button className="btn btn-warning px-4 py-2 mt-3">
              Order Now
            </button>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="5000">
          <img src={image2} className="d-block w-100 c-img" alt="..." />
          <div className="carousel-caption">
            <h1>Indulge in the Aromatic Biryani Delights</h1>
            <hr
              id="horizontal-line"
              className="w-25  m-auto border-3 solid white"
            />
            <p className="bottom-0 mt-4">
              Immerse yourself in the rich flavors of Zaffran's signature
              biryani
            </p>
            <p>
              {" "}
              Crafted with premium basmati rice, tender marinated meat, and a
              secret blend of spices
            </p>

            <button className="btn btn-warning px-4 py-2 mt-3">
              Order Now
            </button>
          </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="5000">
          <img src={image3} className="d-block w-100 c-img" alt="..." />
          <div className="carousel-caption">
            <h1>Grilled to Perfection</h1>
            <hr
              id="horizontal-line"
              className="w-25  m-auto border-3 solid white"
            />
            <p className="bottom-0 mt-4">
              {" "}
              Our succulent kababs, meticulously prepared by skilled chefs.
            </p>
            <p>
              {" "}
              From classic seekh kababs to flavorful reshmi kababs, experience
              the best of Indian grilling at Zaffran.
            </p>
            <button className="btn btn-warning px-4 py-2 mt-3">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
