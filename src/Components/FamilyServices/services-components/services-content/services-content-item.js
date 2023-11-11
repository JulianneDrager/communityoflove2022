import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentStyles from "./css/services-content-item.module.css";
import { useMediaQuery } from "@mui/material";

// test image import, don't want to use this
import myImage from "images/Community of Love/services/mobile-service/employment-icon.jpg"


const ServicesContentItem = (props) => {

    const mainContainer = ContentStyles.mainContainer;
    const iconImageMobileStyle = ContentStyles.iconImageMobileStyle;
    const iconImageDesktopStyle = ContentStyles.iconImageDesktopStyle;
    const title = ContentStyles.title;
    const question = ContentStyles.question;
    const articleHead = ContentStyles.articleHead;
    const article = ContentStyles.article;
    const priceRow = ContentStyles.priceRow;

    const matchedLg = useMediaQuery("(min-width: 765px)");


    // THIS DOESN'T WORK, but I need to use property paths from data component
    // console.log("prop import: " + props.iconImageMobilePath);
    // THIS WORKS, but I can't make imports here. I need to run the paths from the data component
    // console.log("direct import: " + myImage);

    // require must use dynamic paths, not absolute paths
    // const myRequiredImage = require(`../../../../images/Community of Love/services/mobile-service/employment-icon.jpg`);
    // const myRequiredImage = require(`../../../../${props.iconImageMobilePath}`);
    // console.log('plain: ../../../../images/Community of Love/services/mobile-service/employment-icon.jpg')
    // console.log('props: ../../../../' + `${props.iconImageMobilePath}`)

    // const myPropImage = `${props.iconImageMobilePath}`;
    // const myPropImage2 = `../../../../${props.iconImageMobilePath}`;
    // const myPropImage3   = `${props.iconImageMobilePath}`;
    // const myPropImage4   = "../../../../images/Community of Love/services/mobile-service/employment-icon.jpg";
    
    // const imagePath = `images/Community of Love/services/mobile-service/${props.iconImageMobilePath}`;

    // require.context must use dynamic paths, not absolute paths
    const imagesContext = require.context('../../../../images', true);
    // const myImageInContext = imagesContext(`./${props.iconImageMobilePath}`);

    return (
        <>
            {!matchedLg && (
                <main className={mainContainer}>
                    {/* <Image src={myImage} className={iconImageMobileStyle} alt="" />
                    <Image src={props.iconImageMobilePath} className={iconImageMobileStyle} alt="" />
                    <Image src="images/Community of Love/services/mobile-service/employment-icon.jpg" className={iconImageMobileStyle} alt="" />
                    <Image src="../../../../images/Community of Love/services/mobile-service/employment-icon.jpg" className={iconImageMobileStyle} alt="" />
                    <Image src={myPropImage} className={iconImageMobileStyle} alt="" />
                    <Image src={myPropImage2} className={iconImageMobileStyle} alt="" />
                    <Image src={myPropImage3} className={iconImageMobileStyle} alt="" />
                    <Image src={myPropImage4} className={iconImageMobileStyle} alt="" /> */}
                    <Image src={imagesContext(`./${props.iconImageMobilePath}`)} className={iconImageMobileStyle} alt="" />

                        {/* <h3 className={title}>{props.title}</h3>
                    </div> */}
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
                        <div src={props.iconImageDesktopPath} className={iconImageDesktopStyle}>
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
