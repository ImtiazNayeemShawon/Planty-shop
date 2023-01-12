import React from "react";
import "../Styles/OfferingPage.css";
import Indoor from "../Assets/indoor.png";
import Outdoor from "../Assets/outdoor.png";
import Core from "../Assets/core.png";

export default function OfferingPage() {
  return (
    <div>
      <div className="offer-head">
        <h1>What we are offering? </h1>
        <div className="cards">
          <div>
            <img src={Indoor} alt="Indoor plants" />
            <h5>Indoor plants</h5>
            <p>
              packages and web page editors now use Lorem Ipsum as their default
              model text, have evolved over the years, sometimes by accident,
              sometimes on purpose injected humour and the like
            </p>
          </div>
          <div>
            <img src={Outdoor} alt="Outdoor  plants" />
            <h5>Out door plants</h5>
            <p>
              packages and web page editors now use Lorem Ipsum as their default
              model text, have evolved over the years, sometimes by accident,
              sometimes on purpose injected humour and the like
            </p>
          </div>
          <div>
            <img src={Core} alt="Core" />
            <h5>Garden tools</h5>
            <p>
              packages and web page editors now use Lorem Ipsum as their default
              model text, have evolved over the years, sometimes by accident,
              sometimes on purpose injected humour and the like
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
