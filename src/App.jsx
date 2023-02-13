import React from "react";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
