import React from "react";
import { Image, Button } from "react-bootstrap";
import ServiceStyles from "../css/ServicesPage.module.css";
import ContactStyles from "./css/services-contact.module.css";

const ServicesContact = () => {

    const mainContainer = ContactStyles.mainContainer;

    return (
        <>
            <div className={mainContainer}>
                Services Contact is working!
            </div>
        </>
    )
}

export default ServicesContact;