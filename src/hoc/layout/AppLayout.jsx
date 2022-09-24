import React, { useLayoutEffect, useState } from "react";
import "./applayout.scss";
import HeaderTpLg from "../../components/header/HeaderTpLg";
import HeaderTpSm from "../../components/header/HeaderTpSm";
import HeaderBwLg from "../../components/header/HeaderBwLg";
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

const AppLayout = () => {
  const [viewportWidth, setViewportWidth] = useState();
  const [scroll, setScroll] = useState(0);

  useLayoutEffect(() => {
    function changeBackground() {
      setScroll(window.scrollY);
    }

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

  console.log(scroll, viewportWidth);
  return (
    <>
      <div className="landing_page">
        {scroll < 150 ? (
          viewportWidth > 900 ? (
            <HeaderTpLg />
          ) : (
            <HeaderTpSm />
          )
        ) : viewportWidth > 900 ? (
          <HeaderBwLg />
        ) : (
          <HeaderTpSm />
        )}
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
