import React from "react";
import { Image, Button } from "react-bootstrap";
import HeaderStyle from "./css/Header.module.css";
import Background from "../../../images/mobile-header/mobile-header-background.jpg";
import Logo from "../../../images/mobile-header/mobile-logo.png";
import Content from "../../../images/mobile-header/mobile-header-content.png";

const MobileHeader = () => {

    const WrapperStyle = HeaderStyle.wrapper;
    const ContentWrapperStyle = HeaderStyle.contentWrapper;
    const BackgroundImageStyle = HeaderStyle.backgroundImage;
    const LogoImageStyle = HeaderStyle.logoImage;
    const ContentImageStyle = HeaderStyle.contentImage;
    const ButtonStyle = HeaderStyle.button;

    return (
        <>
            <main id="wrapper" class={WrapperStyle}>
                {/* Background Image */}
                <Image src={Background} className={BackgroundImageStyle} />
                
                <div id="contentWrapper" className={ContentWrapperStyle}>
                    {/* Logo */}
                    <Image src={Logo} className={LogoImageStyle} />
                    {/* "A place where" subtitle */}
                    <h2>A Place Where</h2>
                    {/* "Coffee, Tea, Gospel" Title Image */}
                    <Image src={Content} className={ContentImageStyle} />
                    {/* Address subtitle */}
                    <h2>190-03 Holis Ave</h2>
                    {/* Phone 1 subtitle */}
                    <h3>718.413.7177</h3>
                    {/* divider */}
                    {/* Phone 2 subtitle */}
                    <h3>347.461.5185</h3>
                    {/* "Learn More" button */}
                    <Button className={ButtonStyle}>Learn More</Button>
                </div>
            </main>
        </>
    )
}

export default MobileHeader;