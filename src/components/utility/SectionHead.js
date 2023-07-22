import React from "react";
import '../style/sectionheading.css'


const SectionHead = (props) => {
    const {title, text}=props
  return (
    <div className="section_head row text-center my-5">
      <h1 className="section_head-title">{title}</h1>
      <h5 className="text-white text-capitalize font-italic w-75 mx-auto" style={{fontSize:"20px"}}>{text}</h5>
    </div>
  );
};

export default SectionHead;
