import React, { Fragment, useState } from "react";

import "../../styles/Portfolio.scss";
import Modal from "../Modal";

export default function PortfolioItem({ item }) {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      <div className="portfolio__item">
        <img src={item.source} alt={item.alt} />
        <div className="item__description">
          <h2>{item.title.toUpperCase()}</h2>
          <h3>Technologies:</h3>
          <p>{item.technologies}</p>
          <div className="actions">
            <button className="button" onClick={showModalHandler}>
              Show Details
            </button>
            {/* <a href={item.live} target="_blank">
            <button className="button">Live</button>
          </a>
          <a href={item.code} target="_blank">
            <button className="button">Code</button>
          </a> */}
          </div>
        </div>
      </div>
      {showModal && <Modal item={item} onClose={showModalHandler} />}
    </Fragment>
  );
}
