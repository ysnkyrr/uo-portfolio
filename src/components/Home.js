import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';
import Slider from './Slider';

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <Footer />
    </div>
  );
}

export default Home