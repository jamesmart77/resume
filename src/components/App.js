import React from "react";
import Resume from "./Resume";
import bitmojiRight from '../images/bitmojiRight.png';

export default function App() {
  return (
    <div className="app">
      <img src={bitmojiRight} alt="grape vine" className="right-img" />
      <Resume />
    </div>
  );
}
