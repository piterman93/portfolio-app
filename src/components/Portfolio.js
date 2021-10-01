import React from "react";

import "../styles/Portfolio.scss";

const title = "<portfolio>";
const titleEnd = "</portfolio>";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
        <h1>{title}</h1>
        <div className="portfolio__card"></div>
        <h1>{titleEnd}</h1>
      </div>
    </div>
  );
}
