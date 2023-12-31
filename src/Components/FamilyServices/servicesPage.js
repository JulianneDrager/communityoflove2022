import React from "react";
import { Image, Button } from "react-bootstrap";
import ServiceStyles from "./css/ServicesPage.module.css";
import ServicesHeader from "./services-components/services-header";
import ServicesBusiness from "./services-components/services-content-business";
import ServicesContact from "./services-components/services-contact";
import ServicesFamily from "./services-components/services-content-family";

const ServicesPage = () => {

    const mainContainer = ServiceStyles.mainContainer;
    const headerDesktopStyle = ServiceStyles.headerDesktopStyle;

    return (
        <>
            <div className={mainContainer}>
                <ServicesHeader className={headerDesktopStyle}/>
                <ServicesBusiness/>
                <ServicesFamily/>
                <ServicesContact/>
            </div>
            
        </>
    )
}

export default ServicesPage;