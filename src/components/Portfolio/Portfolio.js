import React, { useState } from "react";

import "../../styles/Portfolio.scss";

import PortfolioItem from "./PortfolioItem";
import Modal from "../Modal";

import checkin from "../../assets/check-in-app.png";
import burger from "../../assets/burger-app.png";
import afore from "../../assets/afore-app.png";
import vaccine from "../../assets/vaccine-app.png";
import fit from "../../assets/fit-app.png";

const title = "<portfolio>";
const titleEnd = "</portfolio>";

const data = [
  {
    id: 1,
    source: burger,
    phoneApp: false,
    alt: "BurgerBar Website",
    title: "BurgerBar website",
    technologies: "React | TypeScript | SCSS",
    live: "https://piterman93.github.io/burger-app/",
    code: "https://github.com/piterman93/burger-app",
    description:
      "Single page application created in React for a local restaurant which specialize in serving burgers.",
  },
  {
    id: 2,
    source: fit,
    phoneApp: true,
    alt: "Fitness application",
    title: "Fitness application",
    technologies: "React Native | Redux",
    live: "",
    code: "",
    description:
      "Commercial application which is still being under development. Application will be available only for subscribing users. They will have an access to multiple workout plans, exercises, challenges and diets",
  },
  {
    id: 3,
    source: afore,
    phoneApp: false,
    alt: "Afore application",
    title: "Afore application",
    technologies: "React | Redux | SCSS",
    live: "https://afore-dev.com/#/login",
    code: "",
    description:
      "Big commercial application in which I was involved, created for a Afore Company. Application collects the data about photovoltaic installations",
  },
  {
    id: 4,
    source: checkin,
    phoneApp: false,
    alt: "Check-in application",
    title: "Check-in application",
    technologies: "React | Redux | SCSS",
    live: "https://piterman93.github.io/check-in-app/",
    code: "https://github.com/piterman93/check-in-app",
    description:
      "Website only application designed to simulate flight control, for example: it displays information about a selected flight, allows to check-in passengers, change seats, add special services for a selected passenger, edit his data, or filter passengers according to various criteria.",
  },
  {
    id: 5,
    source: vaccine,
    phoneApp: false,
    alt: "Vaccination application",
    title: "Vaccination application",
    technologies: "React | Context API",
    live: "https://piterman93.github.io/vaccination-list/",
    code: "https://github.com/piterman93/vaccination-list",
    description:
      "One of my first applications - classic app based on to-do scheme.",
  },
];

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (item) => {
    setActiveItem(item);
    setShowModal(!showModal);
  };

  const content = data.map((item) => (
    <PortfolioItem
      key={item.id}
      item={item}
      onShowModal={() => showModalHandler(item)}
    />
  ));
  return (
    <React.Fragment>
      <div className="portfolio" id="portfolio">
        <div className="wrapper">
          <h1>{title}</h1>
          <div className="portfolio__card">{content}</div>
          <h1>{titleEnd}</h1>
        </div>
      </div>
      {showModal && <Modal item={activeItem} onClose={showModalHandler} />}
    </React.Fragment>
  );
}
