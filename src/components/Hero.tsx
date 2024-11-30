import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    // <div
    //   id="hero"
    //   className="min-h-screen lg:bg-no-repeat lg:bg-cover bg-[url(/profile-image.png)] " 
    //   style={{
    //     backgroundSize: "35%",
    //     backgroundPosition: "left 140px top 140px",
    //   }}
  
    // >
    <div
  id="hero"
  className="min-h-screen lg:bg-no-repeat lg:bg-cover bg-none lg:bg-[url(/profile-image.png)]"
  style={{
    backgroundSize: "35%",
    backgroundPosition: "left 100px top 100px",
  }}
>
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div style={{backgroundPosition: "top 50px"}}>
            <p data-aos="zoom-in-up">MySelf</p>
            <p data-aos="zoom-in-up">Nisha</p>
            <p data-aos="zoom-in-up">Jilani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
