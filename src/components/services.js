import React from "react";
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
import "./services.css";
export default function Services() {
  return (
    <>
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
            <div className="photo-div" >
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
    </>
  );
}
