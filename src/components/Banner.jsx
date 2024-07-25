
"use client";

import { Carousel } from "flowbite-react";
import firstgirl from '../images/union1.jpg';
import secondgirl from '../images/pinkgirl.jpg';
import thirdgirl from '../images/yellowgirl.jpg';
import fourthgirl from '../images/style2.jpg';
import fifthgirl from '../images/model.jpg';
import sixthgirl from '../images/union22.jpg';

export function Banner() {
  return (
    <div className="h-64 sm:h-64 xl:h-96 2xl:h-108">
      <Carousel leftControl="" rightControl="">
        <img src={firstgirl} alt={firstgirl} />
        <img src={secondgirl}  alt={secondgirl}/>
        <img src={thirdgirl} alt={thirdgirl} />
        <img src={fourthgirl} alt={fourthgirl}/>
        <img src={fifthgirl} alt={fifthgirl} />
        <img src={sixthgirl} alt={sixthgirl} />
      </Carousel>
    </div>
  );
}
