import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import image from '../images/bitmojiRight.png';

export default function Image() {
  return (
    <div className="image">
      <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' delay={250} offset={0}>
        <img src={image} alt="james martineau bitmoji" className="right-img" />
      </ScrollAnimation>
    </div>
  );
}