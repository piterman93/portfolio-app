import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "../styles/Modal.scss";

import CloseIcon from "@mui/icons-material/Close";

const Backdrop = ({ onClose }) => {
  return (
    <div className="backdrop">
      <button className="close" onClick={onClose}>
        <div className="wrap">
          <CloseIcon className="close__icon" />
        </div>
      </button>
    </div>
  );
};

const Overlay = ({ item }) => {
  const imageContainerClasses = `modal__image_container ${
    item.phoneApp ? "mobile" : ""
  }`;
  return (
    <div className="modal__card">
      <div className="modal__description">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <h3>{item.technologies}</h3>
        <div className="actions">
          <a href={item.live} target="_blank" rel="noreferrer">
            <button className="button" disabled={!item.live}>
              Live
            </button>
          </a>
          <a href={item.code} target="_blank" rel="noreferrer">
            <button className="button" disabled={!item.code}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={imageContainerClasses}>
        <img src={item.source} alt={item.alt} />
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

export default function Modal({ item, onClose }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<Overlay item={item} />, portalElement)}
    </Fragment>
  );
}
