import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <div>imagen</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">login</Link>
        <Link to="/editporduct"> Edit Product</Link>
        <Link to="/postproduct">New Product</Link>
      </nav>
    </header>
  );
};

export default Headers;
