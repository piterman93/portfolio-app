import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";

import "../../styles/ContactForm.scss";

export default function ContactForm() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [inputNameValid, setInputNameValid] = useState(false);
  const [inputEmailValid, setInputEmailValid] = useState(false);
  const [inputMessageValid, setInputMessageValid] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [showMessageConfirmation, setShowMessageConfirmation] = useState(false);

  const formValid = inputNameValid && inputEmailValid && inputMessageValid;

  const formRef = useRef();

  const inputNameHandler = (e) => {
    const nameValue = e.target.value;
    setInputName(nameValue);

    if (nameValue.trim().length > 1) {
      setInputNameValid(true);
    } else {
      setInputNameValid(false);
    }
  };

  const inputEmailHandler = (e) => {
    const emailValue = e.target.value;
    setInputEmail(emailValue);

    if (emailValue.trim().includes("@.")) {
      setInputEmailValid(true);
    } else {
      setInputEmailValid(false);
    }
  };

  const inputMessageHandler = (e) => {
    const messageValue = e.target.value;
    setInputMessage(messageValue);

    if (messageValue.trim().length > 10) {
      setInputMessageValid(true);
    } else {
      setInputMessageValid(false);
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsInitial(false);
    if (formValid) {
      emailjs
        .sendForm(
          "service_etjah45",
          "template_txi84mh",
          formRef.current,
          "user_MdJ4pU8mXf4FYYp6oqoEN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setInputName("");
      setInputEmail("");
      setInputMessage("");
      setInputNameValid(false);
      setInputEmailValid(false);
      setInputMessageValid(false);
      setShowMessageConfirmation(true);
      setIsInitial(true);

      setTimeout(() => {
        setShowMessageConfirmation(false);
      }, 4000);
    }
  };

  return (
    <div className="form__container">
      {showMessageConfirmation && (
        <div className="message__confirmation">
          <p>Your message has been sent.</p>
          <p>I will respond as soon as possible.</p>
          <p>Thank you!</p>
        </div>
      )}
      {!showMessageConfirmation && (
        <form ref={formRef} action="submit">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="filled-basic"
              label="Please let me know your name..."
              variant="filled"
              fullWidth={true}
              InputLabelProps={{ className: "input__label" }}
              InputProps={{ className: "input__props" }}
              onChange={inputNameHandler}
              value={inputName}
              name="name"
            />
            <TextField
              id="filled-basic"
              label="Enter your email address..."
              variant="filled"
              fullWidth={true}
              InputLabelProps={{ className: "input__label" }}
              InputProps={{ className: "input__props" }}
              onChange={inputEmailHandler}
              value={inputEmail}
              name="email"
            />
            <TextField
              id="filled-basic"
              label="Here is place for your message..."
              variant="filled"
              fullWidth={true}
              multiline={true}
              InputLabelProps={{ className: "input__label" }}
              InputProps={{ className: "input__props" }}
              rows={8}
              onChange={inputMessageHandler}
              value={inputMessage}
              name="message"
            />
            <button className="button" onClick={submitFormHandler}>
              Send message
            </button>
          </Box>
        </form>
      )}
      <div className="error">
        {!inputNameValid && !isInitial && <p>Please provide your name.</p>}
        {!inputEmailValid && !isInitial && (
          <p>Your email address is incorrect (must contain @.).</p>
        )}
        {!inputMessageValid && !isInitial && (
          <p>Message is to short (please provide at least 10 characters).</p>
        )}
      </div>
    </div>
  );
}
