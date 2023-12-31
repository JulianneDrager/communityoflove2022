import React from "react";
import DividerStyle from "./css/DividerStyle.module.css";
import triShape from "../../../images/Community of Love/mobile-divider/triangle.png";

const DividerTestimony = () => {
    const greenDividerTestimony = DividerStyle.greenDividerTestimony;
    const triangle = DividerStyle.triangle;
  return (
    <>

        <div className={greenDividerTestimony}>
        <img className={triangle} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default DividerTestimony;
