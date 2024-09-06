import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

//Navbar import
import image18 from "../images/zaffranNewLogo.png";
import "../components/nav.css";

//Slider import
import image1 from "../images/topv1.jpg";
import image2 from "../images/topv2.jpg";
import image3 from "../images/topv3.jpg";
import "../components/slider.css";

//How it works import
import "../components/about.css";
import image4 from "../images/cutlery.png";
import image25 from "../images/food.png";
import image26 from "../images/menu2.png";
import image21 from "../images/burger1.png";

//Menu import
import "../components/teams.css";
import image5 from "../images/front5.jpg";
import image6 from "../images/ch6.jpg";
import image7 from "../images/dl7.jpg";
import image8 from "../images/img8.jpg";

//Special menu import
import image9 from "../images/long1.jpg";
import image10 from "../images/card1.jpg";
import image11 from "../images/long5.jpg";
import image12 from "../images/biryani1.jpg";
import image13 from "../images/long2.jpg";
import image14 from "../images/card2.jpg";
import image15 from "../images/card3.jpg";
import image16 from "../images/long7.jpg";
import image17 from "../images/long6.jpg";
import image19 from "../images/long4.jpg";
import image20 from "../images/card3.jpg";
import "../components/services.css";

//Form
import image22 from "../images/slider2form.jpg";
import "../components/forms.css";

//Acctual Home starts
import Slider from "../components/slider";
import About from "../components/about";

export default function Home() {
  {
    /* Form javascript */
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    //call backend api
    console.log("sign in:", email, password, city, address);
  };

  return (
    <React.Fragment>
      <Slider />
      <About />

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
                <div class="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-currency-rupee"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                  </svg>
                  250
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="services">
        <h2>
          This Week <strong>Special Meals:</strong>
        </h2>
        <p>
          Experience a diverse menu of vegetarian and non-vegetarian delights.
          <br /> From flavorful veggie dishes to mouthwatering meat options,
          there's something for everyone. Join us for a culinary adventure
          today!
        </p>
      </div>
      <div className="container full-width">
        <div className="photo-gallery">
          <div class="column">
            <div className="photo">
              <img src={image9} style={{ width: "100%" }} />
            </div>
            <div className="photo">
              <img src={image10} style={{ width: "100%" }} />
            </div>
            <div className="photo">
              <img src={image11} style={{ width: "100%" }} />
            </div>
            <div className="photo-div">
              <img
                src={image19}
                id="important-img"
                style={{ width: "100%", height: "150%" }}
              />
            </div>
          </div>
          <div class="column">
            <div className="photo">
              <img src={image12} style={{ width: "100%" }} />
            </div>
            <div className="photo">
              <img src={image13} style={{ width: "100%" }} />
            </div>
            <div className="photo">
              <img src={image14} style={{ width: "100%" }} />
            </div>
            <div className="photo">
              <img src={image20} style={{ width: "100%" }} />
            </div>
          </div>
          <div class="column">
            <div className="photo">
              <img src={image15} style={{ width: "100%" }} />
            </div>
            <div className="photo">
              <img src={image16} style={{ width: "100%" }} />
            </div>
            <div className="photo">
              <img src={image17} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      {/*Form*/}
      <div className="container-fluid">
        <div className="form-img">
          <img src={image22} alt="image here" />
        </div>
        <div className="form-elements">
          <h2>Book Your Table Now</h2>
          <form class="row g-3" onSubmit={handleSignIn}>
            <div class="col-md-6">
              <label for="validationDefault01" class="form-label">
                Your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="form-control"
                id="validationDefault01"
                placeholder="email"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="validationDefault01" class="form-label">
                Your password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
                id="validationDefault01"
                placeholder="password"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="validationDefault03" class="form-label">
                Enter City
              </label>
              <input
                type="text"
                placeholder="city"
                class="form-control"
                onChange={(e) => setCity(e.target.value)}
                id="validationDefault03"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="address">Special Request</label>
              <textarea
                name="Address"
                id="address"
                cols="33"
                rows="4"
                placeholder="Address here"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <div class="col-12">
              <button class="btn btn-warning" type="submit">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
