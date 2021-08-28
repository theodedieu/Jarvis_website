import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

import Roll from 'react-reveal/Roll';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
  }, []);

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.scrollProgress);
  // }

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;

    console.log(scrolled);

    setScrolled(scrolled);
  };

  const progressContainerStyle = {
    // background: "#c2c9ff",
    // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    height: "5px",
    position: "fixed",
    top: 80,
    left: -5,
    width: "100vw",
    zIndex: 99
  };

  const progressBarStyle = {
    height: "10px",
    background: "#7482ff",
    borderRadius: "35px",
    width: scrolled
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="progress-container" style={progressContainerStyle}>
        <div className="progress-bar" style={progressBarStyle} />
      </div>
      <HeroSection />
      <Roll bottom left>
        <InfoSection {...homeObjOne} />
      </Roll>
      <Roll bottom right>
        <InfoSection {...homeObjTwo} />
      </Roll>
      <Services />
      <Roll bottom left>
        <InfoSection {...homeObjThree} />
      </Roll>
      <Footer />
    </>
  )
}

export default Home;