import React from "react";
import { Image, Button } from "react-bootstrap";
import ServiceStyles from "../css/ServicesPage.module.css";
import HeaderStyles from "./css/services-header.module.css";

const ServicesHeader = () => {

    const mainContainer = HeaderStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Header is working!
            </div>
        </>
    )
}

export default ServicesHeader;