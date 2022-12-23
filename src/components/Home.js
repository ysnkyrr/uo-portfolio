import React from "react";
import Background from "./Background";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <Footer />
      <Background />
    </div>
  );
}

export default Home;
