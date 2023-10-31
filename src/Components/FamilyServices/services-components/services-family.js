import React from "react";
import { Image, Button } from "react-bootstrap";
import ServiceStyles from "../css/ServicesPage.module.css";
import FamilyStyles from "./css/services-family.module.css";

const ServicesFamily = () => {

    const mainContainer = FamilyStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Family is working!
            </div>
        </>
    )
}

export default ServicesFamily;