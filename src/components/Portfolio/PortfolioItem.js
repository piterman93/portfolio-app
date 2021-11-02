import React from "react";

import "../../styles/Portfolio.scss";

export default function PortfolioItem({ item, onShowModal }) {
  const itemClasses = `portfolio__item ${item.phoneApp ? "mobile" : ""}`;
  return (
    <div className={itemClasses}>
      <img src={item.source} alt={item.alt} />
      <div className="item__description">
        <h2>{item.title}</h2>
        <h3>Technologies:</h3>
        <p>{item.technologies}</p>
        <div className="actions">
          <button className="button" onClick={onShowModal}>
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}
