import React from "react";

import "../styles/Footer.scss";

import logo from "../assets/logo-transparent.png";

export default function Footer() {
  return (
    <div className="footer">
      <h3>Copyright © Piotr Maniak</h3>
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="logo Piotr Maniak" />
        </a>
      </div>
    </div>
  );
}
