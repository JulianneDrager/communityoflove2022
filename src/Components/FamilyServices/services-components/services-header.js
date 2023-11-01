import React from "react";
import { Image, Button } from "react-bootstrap";
import ServiceStyles from "../css/ServicesPage.module.css";
import HeaderStyles from "./css/services-header.module.css";

const ServicesHeader = () => {

    const mainContainer = HeaderStyles.mainContainer;
    const h1Style = HeaderStyles.h1Style;
    const h2Style = HeaderStyles.h2Style;
    const contentContainer = HeaderStyles.contentContainer;
    const h3Style = HeaderStyles.h3Style;
    const paragraph = HeaderStyles.paragraph;
    const btnSurvey = HeaderStyles.btnSurvey;

    return (
        <>
            <main className={mainContainer}>
                <h1 className={h1Style}>Community of Love</h1>
                <h2 className={h2Style}>Family & Business Services</h2>
                <section className={contentContainer}>
                    <h3 className={h3Style}>Welcome</h3>
                    <p className={paragraph}><span>Coming soon, we will be offering various services for families and businesses alike.</span></p>
                    <p className={paragraph}>Services will range from employee recruitment to employment opportunities, childcare, pet sitting, tutoring services, foreign language courses, transportation services, and more. It is our heart to serve you and meet every need, big or small. Please take some time to complete the survey below so we can assess your needs to best benefit you.</p>
                    <button className={btnSurvey}>Take Survey</button>
                </section>
            </main>
        </>
    )
}

export default ServicesHeader;