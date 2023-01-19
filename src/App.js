import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import OfferingPage from "./Components/OfferingPage";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import ProductHead from "./Components/ProductHead";

class App extends Component {
  render() {
    const quantities = [1, 2, 3];
    return (
      <div>
        <Navbar />
        <div className="main-components">
          <HomePage />
          <OfferingPage />
          <ProductHead />
          <ProductList quantities={quantities} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
