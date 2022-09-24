import React, { useLayoutEffect, useState } from "react";
import "./applayout.scss";
import Header from "../../components/header/Header";
import Landing from "../../components/Landing/Landing";
import Overview from "../../components/overview/Overview";
import Amenities from "../../components/amenities/Amenities";
import LifeAtM from "../../components/lifeatM/LifeAtM";
import Experience from "../../components/experience/Experience";
import Green from "../../components/green/Green";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import Disclaimer from "../../components/disclaimer/Disclaimer";
import Footer from "../../components/Footer/Footer";
import MbHeader from "../../components/header/MbHeader";

const AppLayout = () => {
  const [viewportWidth, setViewportWidth] = useState();
  const [scroll, setScroll ] = useState(0)

  useLayoutEffect(() => {
    
    function changeBackground () {
      setScroll(window.scrollY);
    };
  
    function updateSize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    window.addEventListener("scroll", changeBackground);
    changeBackground();

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", updateSize);
    };
    
  }, [viewportWidth]);

  return (
    <>
      <div className="landing_page">
        {viewportWidth > 900 ? <Header /> : <MbHeader />}
        <Landing viewportWidth={viewportWidth} />
      </div>
      <Overview />
      <Amenities />
      <LifeAtM />
      <Experience />
      <Green />
      <Testimonials />
      <Contact />
      <Disclaimer />
      <Footer />
    </>
  );
};

export default AppLayout;
