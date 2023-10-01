
import React, { useState } from 'react';
import dataDummy from '../dataDummy';
import Card from '../card/Card';
import testimonialStyle from "./testimonial.module.css";

const Testimonial = () => {
  const mainConStyle = testimonialStyle.mainConStyle;
  const headContainer = testimonialStyle.headContainer;
  const pStyle = testimonialStyle.pStyle;
  const headContainerh1 = testimonialStyle.headContainerh1;
  const cardsConStyle = testimonialStyle.cardsConStyle;
  const testimonialheader = testimonialStyle.testimonialheader;
  const secondaryMainContainer = testimonialStyle.secondaryMainContainer;

  // State to keep track of the start index for slicing the array
  const [startIndex, setStartIndex] = useState(0);

  // Function to get the next 3 cards based on the start index
  const getNextCards = () => {
    return dataDummy.slice(startIndex, startIndex + 3).map(card => (
      <Card key={card.id} {...card} />
    ));
  };

  const handleReadMore = () => {
    // Increase the start index for the next set of cards
    setStartIndex(startIndex + 3);
  };

  return (
    <div className={mainConStyle}>
      <div className={secondaryMainContainer}>
        <header className={testimonialheader}>
          <img src='' alt='' />
        </header>
        <div className={headContainer}>
          <h1 className={headContainerh1}>Testimonies of Gods Goodness</h1>
          <p className={pStyle}>Psalm 22:22 "I will praise you to all my brothers, I will stand up before the congregation and testify of the wonderful things you have done.</p>
        </div>
        <div className={cardsConStyle}>
          {getNextCards()}
        </div>
        {/* Render "Read More" button if there are more testimonies to display */}
        {startIndex + 3 < dataDummy.length && (
          <button onClick={handleReadMore}>Read More</button>
        )}
      </div>
    </div>
  );
}

export default Testimonial;


