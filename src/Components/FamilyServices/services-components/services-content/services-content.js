import React from "react";
import { Image, Button } from "react-bootstrap";
import ContentStyles from "./css/services-content.module.css";
import ServicesData from "./services-data";

// this is the iterable component that will display the properties given to it
const ServicesContent = () => {



    const data = ServicesData.map((item) => {
        return <div key={item.id} {...item}> </div>;
      });

    return (
        <>

        </>
    )
}

export default ServicesContent;