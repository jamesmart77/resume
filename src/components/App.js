import React from "react";
import Resume from "./Resume";
import Greeting from "./Greeting";
import Contact from "./Contact";

export default function App() {
  return (
    <main className="app">
      <Greeting />
      <Contact />
      <Resume />
    </main>
  );
}