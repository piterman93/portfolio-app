import React from "react";

import "../../styles/Contact.scss";

import ContactForm from "./ContactForm";
import ContactAside from "./ContactAside";

const title = "<contact>";
const titleEnd = "</contact>";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <h1>{title}</h1>
        <div className="contact__card">
          <ContactAside />
          <ContactForm />
        </div>
        <h1>{titleEnd}</h1>
      </div>
    </div>
  );
}
