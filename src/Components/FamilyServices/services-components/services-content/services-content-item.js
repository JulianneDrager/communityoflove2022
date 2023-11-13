import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentStyles from "./css/services-content-item.module.css";
import { useMediaQuery } from "@mui/material";

const ServicesContentItem = (props) => {

    const mainContainer = ContentStyles.mainContainer;
    const iconContainer = ContentStyles.iconContainer;
    const titleIcon = ContentStyles.titleIcon;
    const title = ContentStyles.title;
    const contentContainer = ContentStyles.contentContainer;
    const question = ContentStyles.question;
    const articleHead = ContentStyles.articleHead;
    const article = ContentStyles.article;
    const pricesContainer = ContentStyles.pricesContainer;

    const matchedLg = useMediaQuery("(min-width: 765px)");

    const imagesContext = require.context('../../../../images/Community of Love/services', true); // require.context must use dynamic paths, not absolute paths

    return (
        <>
            {!matchedLg &&
                // mobile view
                (
                    <main className={mainContainer}>
                        <div className={iconContainer}>
                            <Image src={imagesContext(`./${props.iconImageMobilePath}`)} className={titleIcon} alt="" />
                            <h3 className={title}>{props.title}</h3>
                        </div>
                        <div className={contentContainer}>
                            <h4 className={question}>{props.question}</h4>
                            <h5 className={articleHead}>{props.articleHead}</h5>
                            <article className={article}>{props.article}</article>
                            <div className={pricesContainer}>
                                <p>{props.priceMonth}</p>
                                <p>{props.priceYear}</p>
                            </div>
                        </div>
                    </main>
                ) || (
                    // desktop view
                    <main className={mainContainer}>
                        <div className={iconContainer}>
                            <Image src={imagesContext(`./${props.iconImageDesktopPath}`)} className={titleIcon} alt="" />
                            <h3 className={title}>{props.title}</h3>
                        </div>
                        <div className={contentContainer}>
                            <h4 className={question}>{props.question}</h4>
                            <h5 className={articleHead}>{props.articleHead}</h5>
                            <article className={article}>{props.article}</article>
                            <div className={pricesContainer}>
                                <p>{props.priceMonth}</p>
                                <p>{props.priceYear}</p>
                            </div>
                        </div>
                    </main>
                )
            }
        </>
    );
};

export default ServicesContentItem;
