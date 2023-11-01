import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import VideoPreview from "../Components/VideoPreview";
import Testimonial from "../Components/Testimonial";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <VideoPreview />
      <Testimonial />
      <Pricing />
      <FAQ />
    </>
  );
};

export default HomePage;
