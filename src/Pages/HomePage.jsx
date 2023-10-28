import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import VideoPreview from "../Components/VideoPreview";
import Testimonial from "../Components/Testimonial";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <VideoPreview />
      <Testimonial />
    </>
  );
};

export default HomePage;
