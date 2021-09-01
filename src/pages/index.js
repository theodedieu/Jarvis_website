import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

import Fade from 'react-reveal/Fade';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  newsletter
} from '../components/InfoSection/Data';
import { jarvisBlue } from '../components/constants';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
  }, []);

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
    top: 0,
    left: -5,
    width: "100vw",
    zIndex: 99
  };

  const progressBarStyle = {
    height: "10px",
    background: jarvisBlue,
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
      <Fade left>
        <InfoSection {...homeObjOne} />
      </Fade>
      <Services />
      <Fade right>
        <InfoSection {...homeObjTwo} />
      </Fade>
      <Fade left>
        <InfoSection {...homeObjThree} />
      </Fade>
      <Fade>
        <InfoSection {...newsletter} />
      </Fade>
      <Footer />
    </>
  )
}

export default Home;