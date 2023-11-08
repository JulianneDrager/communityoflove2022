import React from "react";
import ContentStyles from "./css/services-content.module.css";

const ServicesContentItem = (props) => {

    const mainContainer = ContentStyles.mainContainer;
    const iconImage = ContentStyles.iconImage;
    const title = ContentStyles.title;
    const question = ContentStyles.question;
    const subtitle = ContentStyles.subtitle;
    const article = ContentStyles.article;
    const priceRow = ContentStyles.priceRow;

    return (
        <>
            <main className={mainContainer}>
                <div src={props.iconImage} className={iconImage}>
                    <h3 className={title}>{props.title}</h3>
                </div>
                <h4 className={question}>{props.question}</h4>
                <h5 className={subtitle}>{props.subtitle}</h5>
                <article className={article}>{props.article}</article>
                <row className={priceRow}>
                    <p>{props.priceMonth}</p>
                    <p>{props.priceYear}</p>
                </row>
            </main>
        </>
    );
};

export default ServicesContentItem;
