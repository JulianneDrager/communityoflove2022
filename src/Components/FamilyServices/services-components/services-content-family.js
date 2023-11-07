import React from "react";
import ServicesContent from "./services-content/services-content";
import { Image, Button } from "react-bootstrap";
import ContentSectionStyles from "./services-content/css/services-content-section.module.css";


const ServicesFamily = () => {

    const mainContainer = ContentSectionStyles.mainContainer;
    const titleContainer = ContentSectionStyles.titleContainer;
    const subtitleContainer = ContentSectionStyles.subtitleContainer;

    return (
        <>
            <main className={mainContainer}>
                <section className={titleContainer}>
                    <h1>Family Services List</h1>
                </section>
                <section className={subtitleContainer}>
                    <h2>Fulifillment Services</h2>
                </section>
                <ServicesContent/>
                <ServicesContent/>
                <ServicesContent/>
            </main>
        </>
    )
}

export default ServicesFamily;