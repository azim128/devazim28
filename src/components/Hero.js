import React from "react";
import primg from "../assets/12.jpg";
import Particle from "./Particle";
import "./style/hero.css";
// import img1 from "../assets/line-1.png";
// import img2 from "../assets/line-2.png";
import CustomButton from "./utility/customButton.js";
import PopUpSocial from "./utility/PopUpSocial";
// import TextInput from "./utility/TextInput";

const Hero = () => {
  return (
    <>
      <div className="hero-section py-5">
        <Particle/>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-xl-6 col-lg-6 col-12">
              <h2>
                <span>Hello,</span> <br />I am Azim Miah.
              </h2>
              <h5 className="text-white py-3 fs-5">Front End Developer</h5>
              <p className="text-white fs-5">
              Highly motivated Front-end Developer with 2 years of experience in creating user-friendly, interactive, and responsive web applications. Proficient in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, and Next.js, with a strong eye for design and a passion for clean, efficient code.
              </p>
              <CustomButton
                text="Explore Now"
                link="/about"
                variant="outline-info"
                size="lg"
                classname="text-white"
              />
            </div>
            <div id="imgblock" className="col-xl-6 col-lg-6 col-12 d-flex">
              <img src={primg} alt="mridul" />
            </div>
          </div>
          </div>
        
          {/* <div className="row">
            <TextInput
              type="text"
              placeholder="Enter name"
              icon="person"
              required
            />
          </div> */}
          {/* <div class="shape-1">
          <svg width="1038" height="938" viewBox="0 0 1038 938" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_39_4392)">
              <circle cx="290.5" cy="282.5" r="247.5"></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_39_4392"
                x="-457"
                y="-465"
                width="1495"
                height="1495"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_4392"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div class="shape-2">
          <svg width="1295" height="938" viewBox="0 0 1295 938" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_39_4393)">
              <circle cx="647.5" cy="561.5" r="247.5"></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_39_4393"
                x="0"
                y="-86"
                width="1295"
                height="1295"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_39_4393"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div class="shape-2">
          <svg width="752" height="747" viewBox="0 0 752 747" fill="none">
            <g opacity="0.45" filter="url(#filter0_f_39_4394)">
              <circle cx="647.5" cy="99.5" r="247.5"></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_39_4394"
                x="0"
                y="-548"
                width="1295"
                height="1295"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_39_4394"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <div class="line-shape-1">
          <img src={img1} alt="" />
        </div>
        <div class="line-shape-2">
          <img src={img2} alt="" />
        </div> */}
        
      </div>
      <PopUpSocial/>
    </>
  );
};

export default Hero;
