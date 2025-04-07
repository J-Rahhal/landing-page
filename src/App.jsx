import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [activeLink, setActiveLink] = useState("#home");
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/40 to-pink-400/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
        <Hero />
        <Partners />
        <Mission />
        <Services />
        <Testimonials />
        <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
      </div>
    </div>
  );
};

export default App;
