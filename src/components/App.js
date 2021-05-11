import React from "react";
import Resume from "./Resume";
import bitmojiRight from '../images/bitmojiRight.png';
import bitmojiLeft from '../images/bitmojiLeft.png';

export default function App() {
  return (
    <div className="app">
      <img src={bitmojiRight} alt="grape vine" className="right-img" />
      <img src={bitmojiLeft} alt="vineyard" className="left-img" />
      <Resume />
    </div>
  );
}
