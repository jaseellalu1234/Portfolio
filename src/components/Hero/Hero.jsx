import React from "react";
import Me from "../../Images/Me.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="flex justify-center relative">
      <div className="banner_title text-10xl absolute pt-10">Front-End</div>
      <div className="banner_title_Developer text-15xl absolute pt-44">
        Developer
      </div>
      <img src={Me} alt="" className="h-200 w-100" />
      <div className="banner_title_Outline text-10xl absolute pt-10">
        Front-End
      </div>
      <div className="flex justify-evenly social_media">
        <div className="socialMedia_links absolute bottom-20 left-0 pl-10">
          <span className="social_link p-3">Linkedin</span>
          <span className="social_link p-3">Dribble</span>
          <span className="social_link p-3">Github</span>
        </div>
        <div className="social_media absolute bottom-20 right-0 pr-10">
          <span className="social_link p-3">jaseel.vpmpd@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
