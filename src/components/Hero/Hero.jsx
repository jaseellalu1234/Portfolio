import React from "react";
import Me from "../../Images/Me.png";

function Hero() {
  return (
    <div className="flex justify-center">
      <img src={Me} alt="" className="h-200 w-100" />
    </div>
  );
}

export default Hero;
