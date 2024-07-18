import React from "react";
import Me from "../../Images/Me.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="flex justify-center relative">
      <div className="banner_title text-10xl absolute pt-10">Front-End</div>
      <div className="banner_title_Developer text-15xl absolute pt-56">
        Developer
      </div>
      <img src={Me} alt="" className="h-200 w-100" />
      <div className="banner_title_Outline text-10xl absolute pt-10">
        Front-End
      </div>
      {/* <div className="banner_title_Outline absolute pt-56 text-15xl">
        Developer
      </div> */}
    </div>
  );
}

export default Hero;
