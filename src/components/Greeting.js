import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Typography } from '@lmig/gllt-react-component-library';
import image from '../images/bitmojiRight.png';

export default function Greeting() {
  return (
    <div className="greeting-container">
      <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutRight' delay={250} offset={0}>
        <div className="wrapper">
          <img src={image} alt="james martineau bitmoji" className="greeting-img" />
          <Typography type="body" className="text">
            Hey there! Feel free to reach out if you want to know more.
            Check out my portfolio for some experience examples and more info 🙂
          </Typography>
        </div>
      </ScrollAnimation>
    </div>
  );
}