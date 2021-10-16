import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "../styles/Modal.scss";
import image from "../assets/check-in-app.png";

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
  return (
    <div className="modal__card">
      <div className="modal__description">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <h3>{item.technologies}</h3>
        <div className="actions">
          <a href={item.live} target="_blank">
            <button className="button">Live</button>
          </a>
          <a href={item.code} target="_blank">
            <button className="button">Code</button>
          </a>
        </div>
      </div>
      <div className="modal__image_container">
        <img src={image} alt="" />
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
