import React from "react";
import "./Works.css";
import Web from "../../Images/web_1.png";
function Works() {
  return (
    <div className="flex justify-center mt-40">
      <div class="flex mt-6 bg-white shadow-md bg-clip-border rounded-xl">
        <div class="relative h-40 bg-clip-border rounded-xl bg-blue-gray-500 px-10">
          <img src={Web} />
        </div>
        <div class="relative h-64 bg-clip-border rounded-xl bg-blue-gray-500 px-10">
          <img src={Web} />
        </div>
        <div class="relative h-64 bg-clip-border rounded-xl bg-blue-gray-500 px-10">
          <img src={Web} />
        </div>
        <div class="relative h-64 bg-clip-border rounded-xl bg-blue-gray-500 px-10">
          <img src={Web} />
        </div>
        <div class="relative h-64 bg-clip-border rounded-xl bg-blue-gray-500 px-10">
          <img src={Web} />
        </div>
        <div class="relative h-64 bg-clip-border rounded-xl bg-blue-gray-500 px-10">
          <img src={Web} />
        </div>
      </div>
    </div>
  );
}

export default Works;
