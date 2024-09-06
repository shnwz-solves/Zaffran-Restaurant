import React from "react";
import "./teams.css";
import image5 from "../images/front5.jpg";
import image6 from "../images/ch6.jpg";
import image7 from "../images/dl7.jpg";
import image8 from "../images/img8.jpg";
export default function Teams(){
  return (
    <div className="container">
      <h2 className="mt-4">
        From Our <strong>Menu:</strong>
      </h2>
      <div className="col-md-12 chicken-img ">
        <img src={image7} className="img-fluid" alt="image here" />
      </div>
      <div class="row mx-auto">
        <div class="col-sm-4 md-4 lg-4 mx-auto mt-2">
          <div class="card">
            <img src={image5} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">CHINESE PASTA</p>
            </div>
            <div class="overlay">
          <div class="text">Price:$150</div>
        </div>
          </div>
        </div>
        <div class="col-sm-4 md-4 lg-4 mx-auto mt-2">
          <div class="card">
            <img src={image6} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">PANEER TIKKA</p>
            </div>
            <div class="overlay">
          <div class="text">Price:$200</div>
        </div>
          </div>
        </div>
        <div class="col-sm-4 md-4 lg-4 mx-auto mt-2">
          <div class="card">
            <img src={image8} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">MUTTON BONE NARROW</p>
            </div>
            <div class="overlay">
          <div class="text">Price:$250</div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
