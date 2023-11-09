import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentStyles from "./css/services-content.module.css";
import { useMediaQuery } from "@mui/material";

// test image import, don't want to use this
import myImage from "images/Community of Love/services/mobile-service/employment-icon.jpg"


const ServicesContentItem = (props) => {

    const mainContainer = ContentStyles.mainContainer;
    const iconImageMobile = ContentStyles.iconImageMobile;
    const iconImageDesktop = ContentStyles.iconImageDesktop;
    const title = ContentStyles.title;
    const question = ContentStyles.question;
    const articleHead = ContentStyles.articleHead;
    const article = ContentStyles.article;
    const priceRow = ContentStyles.priceRow;

    const matchedLg = useMediaQuery("(min-width: 765px)");


    // THIS DOESN'T WORK, but I need to use variable paths from data component
    console.log("prop import: " + props.iconImageMobile);
    // THIS WORKS, but I can't make imports here. I need to run the paths from the data component
    console.log("direct import: " + myImage);



    return (
        <>
            {!matchedLg && (
                <main className={mainContainer}>
                    <div src={props.iconImageMobile} className={iconImageMobile}>
                        <h3 className={title}>{props.title}</h3>
                    </div>
                    <h4 className={question}>{props.question}</h4>
                    <h5 className={articleHead}>{props.articleHead}</h5>
                    <article className={article}>{props.article}</article>
                    <div className={priceRow}>
                        <p>{props.priceMonth}</p>
                        <p>{props.priceYear}</p>
                    </div>
                </main>
            ) || (
                    <main className={mainContainer}>
                        <div src={props.iconImageDesktop} className={iconImageDesktop}>
                            <h3 className={title}>{props.title}</h3>
                        </div>
                        <h4 className={question}>{props.question}</h4>
                        <h5 className={articleHead}>{props.articleHead}</h5>
                        <article className={article}>{props.article}</article>
                        <div className={priceRow}>
                            <p>{props.priceMonth}</p>
                            <p>{props.priceYear}</p>
                        </div>
                    </main>
                )
            }
        </>
    );
};

export default ServicesContentItem;
