import React from "react";
import ServicesContent from "./services-content/services-content";
import { Image, Button } from "react-bootstrap";
import ContentBusinessStyles from "./services-content/css/services-content-business.module.css";

const ServicesBusiness = () => {

    const mainContainer = ContentBusinessStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Business is working!
            </div>
            <ServicesContent/>
        </>
    )
}

export default ServicesBusiness;