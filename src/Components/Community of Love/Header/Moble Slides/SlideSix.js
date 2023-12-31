import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import HeaderStyle from "../css/Header.module.css";
import Six from "../../../../images/Community of Love/mobile-header/prayer.jpg";

const SlideSix = () => {
  const galleryCard = HeaderStyle.galleryCard;
  const gallerySlideTitle = HeaderStyle.gallerySlideTitle;
  const galleryParagraph = HeaderStyle.galleryParagraph;
  const imgSize = HeaderStyle.imgSize;
  const btnGallery = HeaderStyle.btnGallery;

  return (
    <div>
      <img className={imgSize} src={Six} alt="" />
      <div className={galleryCard}>
        <h6 className={gallerySlideTitle}>REQUEST PRAYER</h6>
        <p className={galleryParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <Button
          className={btnGallery}
          href="/tmp/communityoflove2022.com/#quick-links"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};
export default SlideSix;
