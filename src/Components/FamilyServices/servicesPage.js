import React from "react";
import { Image, Button } from "react-bootstrap";
import ServiceStyles from "./css/ServicesPage.module.css";
import ServicesHeader from "./services-components/services-header";
import ServicesBusiness from "./services-components/services-business";
import ServicesContact from "./services-components/services-contact";
import ServicesFamily from "./services-components/services-family";

const ServicesPage = () => {

    const mainContainer = ServiceStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Page is working!
                <ServicesHeader/>
                <ServicesBusiness/>
                <ServicesFamily/>
                <ServicesContact/>
            </div>
            
        </>
    )
}

export default ServicesPage;