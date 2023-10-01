import React from 'react'
import dataDummy from '../dataDummy'
import Card from '../card/Card'
import testimonialStyle from "./testimonial.module.css"

const Testimonial = () => {
    const mainConStyle = testimonialStyle.mainConStyle
    const headContainer = testimonialStyle.headContainer
    const pStyle = testimonialStyle.pStyle
    const headContainerh1 = testimonialStyle.headContainerh1
    const cardsConStyle = testimonialStyle.cardsConStyle 
    const testimonialheader = testimonialStyle.testimonialheader
    const secondaryMainContainer = testimonialStyle.secondaryMainContainer

    const cards = dataDummy.map(function(card){
        return <  
        Card
        key={card.id}
        {...card}
          />
      })
  return (
    
    <div className={mainConStyle}>
      <div className={secondaryMainContainer}>
      <header className={testimonialheader}>
      <img src='' alt=''/>
      </header>
    <div className={headContainer}>
        <h1 className={headContainerh1}>Testimonies of Gods Goodness</h1>
        <p className={pStyle}>Psalm 22:22 "I will praise you to all my brothers, I will stand up before the congregation and testify of the wonderful things you have done.</p>
    </div>
    <div className={cardsConStyle}>
        {cards}
    </div>
    </div>
    </div>
  )
}

export default Testimonial
