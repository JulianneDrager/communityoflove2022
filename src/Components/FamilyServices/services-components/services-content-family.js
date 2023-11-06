import React from "react";
import ServicesContent from "./services-content/services-content";
import { Image, Button } from "react-bootstrap";
import ContentFamilyStyles from "./services-content/css/services-content-family.module.css";


const ServicesFamily = () => {

    const mainContainer = ContentFamilyStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Family is working!
            </div>
            <ServicesContent/>
        </>
    )
}

export default ServicesFamily;