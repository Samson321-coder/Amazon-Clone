import React from "react";
import classes from "./carousel.module.css";

import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={true}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} alt="images" />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </>
  );
}

export default CarouselEffect;
