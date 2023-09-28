import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonyStyle from "../Testimonials/TestimonayStyle.module.css";
import { Button } from "react-bootstrap";

const GalleryTestimony = () => {
  const pStyle = TestimonyStyle.pStyle;

  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      animationHandler="slide"
      transitionTime="500"
      interval={5000}
    >
      <div>
        <p className={pStyle}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>

      <div>
        <p className={pStyle}>Ut enim ad</p>
      </div>

      <div>
        <p className={pStyle}>
          Ut enim ad minim veniam
        </p>
      </div>

    </Carousel>
  );
};
export default GalleryTestimony;
