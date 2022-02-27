import React, { useState } from "react";

import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  UncontrolledCarousel
} from "reactstrap";

import tenepic1 from "assets/img/steak.jfif";
import tenepic2 from "assets/img/sabat.jfif";
import tenepic3 from "assets/img/menu.jpg";


const UserCarousel = (props) => {
  return (
    <UncontrolledCarousel
    items={[
      {
        altText: 'Slide 1',
        key: 1,
        src: tenepic1
      },
      {
        altText: 'Slide 2',
        key: 2,
        src: tenepic2
      },
      {
        altText: 'Slide 3',
        key: 3,
        src: tenepic3
      }
    ]}
   />
  );
};

export default UserCarousel;