import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentStyles from "./css/services-content.module.css";

// this is the iterable component that will display the properties given to it
const ServicesContent = () => {

    const mainContainer = ContentStyles.mainContainer;
    const iconImage = ContentStyles.iconImage;
    const h3Style = ContentStyles.h3Style;
    const h4Style = ContentStyles.h4Style;
    const article = ContentStyles.article;
    const priceRow = ContentStyles.priceRow;

    return (
        <>
            <main className={mainContainer}>
                <div className={iconImage}></div>
                <h3 className={h3Style}>question here</h3>
                <h4 className={h4Style}>subtitle here</h4>
                <article className={article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</article>
                <row className={priceRow}>
                    <p>$ 5.00/month</p>
                    <p>$ 50.00/year</p>
                </row>
            </main>
        </>
    )
}

export default ServicesContent;