import React from "react";
import "./About.css";
function About() {
  return (
    <div className="flex flex-wrap justify-center mt-32">
      <div className="role_list">
        <ul className="flex justify-center">
          <li className="jb_list px-3">Front-End Developer</li>
          <li className="jb_list px-3">Web Designer</li>
          <li className="jb_list px-3">UI Designer</li>
          <li className="jb_list px-3">Graphics Designer</li>
        </ul>
      </div>
      <div className="craft_section w-250">
        <span className="craft_text">
          Crafting Stunning Interfaces with Creativity and Precision
        </span>
      </div>
      <div className="craft_section_para w-230">
        <span className="craft_para">
          I am a front-end developer with 3 years of experience in web
          designing, front-end development, UI designing, and graphic designing.
          I have worked on various projects, including e-commerce sites, ERP
          systems, and product-based company projects like HRMS software.
          Additionally, I specialize in UI development and design for mobile
          apps.
        </span>
      </div>
    </div>
  );
}

export default About;
