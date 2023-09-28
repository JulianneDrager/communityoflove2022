import React from "react";
import Gallery from "./Gallery";
import CourseStyle from "./Course.module.css";
import DividerLeft from "../Divider/DividerLeft";


const OutreachGallery = () => {
  const h1Style = CourseStyle.h1Style;
  return (
    <>
        <div id="courses">
          <h1 className={h1Style}>Community Online Language Courses</h1>
        </div>
        <Gallery />
        <DividerLeft/>
    </>
  );
};
export default OutreachGallery;
