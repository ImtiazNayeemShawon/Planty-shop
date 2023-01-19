import React from "react";
import Products from "./Products";

export default function ProductList({ quantities = [] }) {
  return (
    <div>
      {quantities.map(() => (
        <Products key={Math.random()} />
      ))}
    </div>
  );
}
