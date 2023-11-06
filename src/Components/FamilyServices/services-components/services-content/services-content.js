import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentStyles from "./css/services-content.module.css";

const ServicesContent = () => {

    const mainContainer = ContentStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Content is working!
            </div>
        </>
    )
}

export default ServicesContent;