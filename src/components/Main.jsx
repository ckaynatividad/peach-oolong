import React from "react";
import Clock from "./Clock";
const candyUrl = process.env.REACT_APP_CANDY_URL;

export default function Main() {
  return (
    <div className="main">
      {process.env.REACT_APP_TESTING_WORD}
      <p>Hi!! Welcome to my page &lt;3</p>
      <div>
        Candy I'm eating
        <img className="candy" src={candyUrl} />
      </div>
    </div>
  );
}
