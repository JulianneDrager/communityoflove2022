import React from "react";
import { Image, Button } from "react-bootstrap";
import HeaderStyle from "./css/Header.module.css";
import DesktopHeaderStyle from "./css/DesktopHeader.module.css";

import BackgroundImage from "../../../images/desktop-header/desktop-background-header.png";
import LogoImage from "../../../images/desktop-header/desktop-logo.png";
import ContentImage from "../../../images/desktop-header/desktop-header-content.png";

const DesktopHeader = () => {

    const WrapperStyle = HeaderStyle.wrapper;
    const BackgroundImageStyle = HeaderStyle.backgroundImage;
    const ContentWrapperStyle = HeaderStyle.contentWrapper;
    const LogoImageStyle = HeaderStyle.logoImage;
    const ContentImageStyle = HeaderStyle.contentImage;
    const MiniWrapperStyle = HeaderStyle.miniWrapper;
    const DividerStyle = HeaderStyle.divider;
    const ButtonStyle = HeaderStyle.button;

    // Desktop-specific styles (override normal Header styles)
    const DesktopWrapperStyle = DesktopHeaderStyle.wrapper;
    const DesktopBackgroundImageStyle = DesktopHeaderStyle.backgroundImage;
    const DesktopContentWrapperStyle = DesktopHeaderStyle.contentWrapper;
    const DesktopLogoImageStyle = DesktopHeaderStyle.logoImage;
    const DesktopContentImageStyle = DesktopHeaderStyle.contentImage;
    const DesktopMiniWrapperStyle = DesktopHeaderStyle.miniWrapper;
    const DesktopDividerStyle = DesktopHeaderStyle.divider;
    const DesktopButtonStyle = DesktopHeaderStyle.button;

    return (
        <>
            <main id="wrapper" class={`${WrapperStyle} ${DesktopWrapperStyle}`}>
                {/* Background Image */}
                <Image src={BackgroundImage} className={`${BackgroundImageStyle} ${DesktopBackgroundImageStyle}`} />

                <div id="contentWrapper" className={`${ContentWrapperStyle} ${DesktopContentWrapperStyle}`}>
                    {/* Logo */}
                    <Image src={LogoImage} className={`${LogoImageStyle} ${DesktopLogoImageStyle}`} />
                    <div className={MiniWrapperStyle}>
                        {/* "Coffee, Tea, Gospel" Title Image */}
                        <Image src={ContentImage} className={`${ContentImageStyle} ${DesktopContentImageStyle}`} />
                    </div>
                    <div className={`${MiniWrapperStyle} ${DesktopMiniWrapperStyle}`}>
                        <h2>Contact Us</h2>
                        {/* divider */}
                        <div className={`${DividerStyle} ${DesktopDividerStyle}`}></div>
                        <h2>347.461.5185</h2>
                    </div>
                    {/* "Learn More" button */}
                    <Button className={`${ButtonStyle} ${DesktopButtonStyle}`}>Learn More</Button>
                </div>
            </main>
        </>
    )
}

export default DesktopHeader;