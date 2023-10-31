import React from "react";
import { Image, Button } from "react-bootstrap";
import ServiceStyles from "../css/ServicesPage.module.css";
import BusinessStyles from "./css/services-business.module.css";

const ServicesBusiness = () => {

    const mainContainer = BusinessStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Business is working!
            </div>
        </>
    )
}

export default ServicesBusiness;