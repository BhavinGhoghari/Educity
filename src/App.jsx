import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Program/Program";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";
import Videoplay from "./Components/VideoPlayer/Videoplay";

function App() {
  const [playstate, setPlayState] = useState(false);
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subtitle="Our Program" title="What We Offer" />
          <Program />
          <About setPlayState={setPlayState} />
          <Title subtitle="Gallery" title="Campus Photos" />
          <Campus />
          <Title subtitle="Testimonial" title="What Student Says" />
          <Testimonials />
          <Title subtitle="Contact Us" title="Get in Torch" />
          <Contact />
          <Footer />
        </div>
        <Videoplay playstate={playstate} setPlayState={setPlayState} />
      </div>
    </>
  );
}

export default App;
