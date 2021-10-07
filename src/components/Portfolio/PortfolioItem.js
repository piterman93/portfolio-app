import React from "react";

import "../../styles/Portfolio.scss";

export default function PortfolioItem({ item }) {
  return (
    <div className="portfolio__item">
      <img src={item.source} alt={item.alt} />
      <div className="item__description">
        <h2>{item.title.toUpperCase()}</h2>
        <h3>Technologies:</h3>
        <p>{item.technologies}</p>
        <div className="actions">
          <a href={item.live} target="_blank">
            <button className="button">Live</button>
          </a>
          <a href={item.code} target="_blank">
            <button className="button">Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}
