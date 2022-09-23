import React from "react";
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
const AppLayout = () => {
  return (
    <>
      <div className="landing_page">
        <Header />
        <Landing />
      </div>
      <Overview />
      <Amenities />
      <LifeAtM />
      <Experience />
      <Green />
      <Testimonials />
      <Contact />
    </>
  );
};

export default AppLayout;
