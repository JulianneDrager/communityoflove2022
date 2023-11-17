import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentSectionStyles from "./services-content/css/services-content-section.module.css";
import ServicesData from "./services-content/services-data";
import ServicesContentItem from "./services-content/services-content-item";

const ServicesBusiness = () => {

    const mainContainer = ContentSectionStyles.mainContainer;
    const titleContainerBusiness = ContentSectionStyles.titleContainerBusiness;
    const subtitleContainer = ContentSectionStyles.subtitleContainer;

    const servicesContent = ServicesData.map((item) => {
        return <ServicesContentItem key={item.id} {...item}/>;
    });


    return (
        <>
            <main className={mainContainer}>
                <section className={titleContainerBusiness}>
                    <h1>Business Services List</h1>
                </section>
                <section className={subtitleContainer}>
                    <h2>Hiring Services</h2>
                </section>
                {servicesContent[0]}
                {servicesContent[1]}
            </main>
        </>
    )
}

export default ServicesBusiness;