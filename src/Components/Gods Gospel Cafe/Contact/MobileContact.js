import React from "react";
import { Image, Button } from "react-bootstrap";
import ContactStyle from "./css/Contact.module.css";
// Image imports
// import BackgroundImage from "../../../images/";

const MobileContact = () => {

    const WrapperStyle = ContactStyle.wrapper;
    const BackgroundImageStyle = ContactStyle.backgroundImage;
    const PlaceholderBackgroundStyle = ContactStyle.placeholderBackground;
    const ContentWrapperStyle = ContactStyle.contentWrapper;
    const H1Style = ContactStyle.h1Style;

    const InfoWrapperStyle = ContactStyle.infoWrapper;

    return (
        <>
            < main id="wrapper" className={WrapperStyle}>
                {/* Background image */}
                <Image /* src={BackgroundImage} */ className={`${BackgroundImageStyle} ${PlaceholderBackgroundStyle}`} />

                {/* Content Wrapper (blue box) */}
                <div id="contentWrapper" className={ContentWrapperStyle}>
                    {/* H1 Title: "Contact Us" */}
                    <h1 className={H1Style}>Contact <span>Us</span></h1>
                    {/* Info Wrapper (blue box) */}
                    <div id="infoWrapper" className={InfoWrapperStyle}>
                        <p>Text: "CEO"</p>
                        <p>Text: mobile phone</p>
                        <p>Text: "facebook"</p>
                        <p>Text: Address</p>
                        <p>Text: Email</p>
                        <p>Text: Phone Number</p>
                    </div>
                </div>
            </main >
        </>
    )
}

export default MobileContact;