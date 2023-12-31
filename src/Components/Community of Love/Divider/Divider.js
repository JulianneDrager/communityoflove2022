import React from "react";
import DividerStyle from "./css/DividerStyle.module.css";
import triShape from "../../../images/Community of Love/mobile-divider/triangle.png";

const Divider = () => {
    const greenDivider = DividerStyle.greenDivider;
    const triangle = DividerStyle.triangle;
  return (
    <>

        <div className={greenDivider}>
        <img className={triangle} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default Divider;
