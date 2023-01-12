import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import OfferingPage from "./Components/OfferingPage";
import Products from "./Components/Products";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-components">
          <HomePage />
          <OfferingPage />
          <Products/>
        </div>
      </div>
    );
  }
}

export default App;
