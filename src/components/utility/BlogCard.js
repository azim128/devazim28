import React from "react";
import "../style/blogGrid.css";
import CustomButton from "./customButton";

const BlogCard = (props) => {
  return (
    <>
      <div className="blogCard" id="about">
        <img src={props.image} alt="video-4" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className="qmeta">
          <CustomButton
            text="Read More"
            link="#"
            variant="info"
            size="sm"
            classname="text-white font-weight-bold"
          />
          <p style={{fontWeight: "500",fontStyle: "italic"}}>Author: Mridul</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
