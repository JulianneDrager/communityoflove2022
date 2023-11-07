import React from "react";
import DividerStyle from "./css/DividerStyle.module.css";
import triShape from "../../../images/Community of Love/mobile-divider/triangle.png";

const TriangleLeft = () => {
    const triangleLeft = DividerStyle.triangleLeft;
  return (
    <>

        <div style={{height:".1px"}}>
        <img className={triangleLeft} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default TriangleLeft;
