import React from "react";

import "../../styles/ContactForm.scss";

import contactLogo from "../../assets/contact-logo.png";
import myLogo from "../../assets/logo-transparent.png";

export default function ContactAside() {
  return (
    <div className="contact__aside">
      <div className="wrapper__aside">
        <h2>Get in touch!</h2>
        <p>
          Would you like to ask about cooperation or provide your feedback about
          page?{" "}
        </p>
        <p>Do not hesitate and contact me by filling the form!</p>
      </div>
      <div className="icons_wrapper">
        <div className="logo">
          <img src={contactLogo} alt="messenger logo icon" />
        </div>
        <div className="logo my_logo">
          <img src={myLogo} alt="Piotr Maniak logo icon" />
        </div>
      </div>
    </div>
  );
}
