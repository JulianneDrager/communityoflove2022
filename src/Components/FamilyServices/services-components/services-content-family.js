import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentSectionStyles from "./services-content/css/services-content-section.module.css";
import ServicesData from "./services-content/services-data";
import ServicesContentItem from "./services-content/services-content-item";
import { hexToRgb } from "@mui/material";

const ServicesFamily = () => {

    const mainContainer = ContentSectionStyles.mainContainer;
    const titleContainerFamily = ContentSectionStyles.titleContainerFamily;
    const subtitleContainer = ContentSectionStyles.subtitleContainer;

    const servicesContent = ServicesData.map((item, index) => {
        return <ServicesContentItem key={index} {...item}/>;
    });

    return (
        <>
            <main className={mainContainer}>
                <section className={titleContainerFamily}>
                    <h1>Family Services List</h1>
                </section>
                <section className={subtitleContainer}>
                    <h2>Fulfillment Services</h2>
                </section>
                {servicesContent[0]}
            </main>
        </>
    )
}

export default ServicesFamily;