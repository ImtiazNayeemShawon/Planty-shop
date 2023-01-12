import React from "react";
import "../Styles/HomePage.css";
import Leafe from "../Assets/leafe.png";

export default function HomePage() {
  return (
    <div>
      <div className="home">
        <div className="text-side">
          <h1>All you need in the Garden.</h1>
          <p>
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like
          </p>
          <div className="button-group"> 
          <button className="btn-1">Browse products</button>
          <button className="btn-2">Learn more </button>
          </div>
        </div>
        <div className="image-side">
          <img src={Leafe} alt="leafe" />
        </div>
      </div>
    </div>
  );
}
