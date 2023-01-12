import React from "react";
import Logo from "../Assets/logob.png";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="Navbar">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
