// THIS IS A TEMPORARY TEST PAGE FOR INITIAL SETUP ONLY; DELETE FOLDER WHEN NO LONGER NEEDED
import TestPageStyle from "./css/TestPage.module.css";
import { Image } from "react-bootstrap";
import MobileHeaderImg from "../../images/mobile-header/mobile-header-background.jpg";

const TestPage = () => {

    const circleStyle = TestPageStyle.circleStyle;
    const bgColor = TestPageStyle.bgColor;
    const buttonColor = TestPageStyle.buttonColor;
    const pStyle = TestPageStyle.pStyle;
    const MobileHeaderImgStyle = TestPageStyle.MobileHeaderImgStyle;

    return (
        <>
            <main>
                <p className={pStyle}>The background color is currently controlled by "public/index.html"</p>
                <br></br>
                <div className={circleStyle}>red</div>
                <div className={`${circleStyle} ${bgColor}`}>#17438D</div>
                <div className={`${circleStyle} ${buttonColor}`}>#A27F14</div>
                <p className={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Image src={MobileHeaderImg} className={MobileHeaderImgStyle}></Image>
            </main>
        </>
    );
}

export default TestPage;