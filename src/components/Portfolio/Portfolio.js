import React from "react";

import skills from "../../assets/hobbies.jpg";
import PortfolioItem from "./PortfolioItem";

import "../../styles/Portfolio.scss";

const title = "<portfolio>";
const titleEnd = "</portfolio>";

const data = [
  {
    id: 1,
    source: skills,
    alt: "moja apka",
    title: "check in app",
    technologies: "React | Redux | SCSS",
    live: "https://piterman93.github.io/check-in-app/",
    code: "https://github.com/piterman93/check-in-app",
  },
  {
    id: 2,
    source: skills,
    alt: "moja apka",
    title: "check in app",
    technologies: "React | Redux | SCSS",
    live: "https://piterman93.github.io/check-in-app/",
    code: "https://github.com/piterman93/check-in-app",
  },
  {
    id: 3,
    source: skills,
    alt: "moja apka",
    title: "check in app",
    technologies: "React | Redux | SCSS",
    live: "https://piterman93.github.io/check-in-app/",
    code: "https://github.com/piterman93/check-in-app",
  },
  {
    id: 4,
    source: skills,
    alt: "moja apka",
    title: "check in app",
    technologies: "React | Redux | SCSS",
    live: "https://piterman93.github.io/check-in-app/",
    code: "https://github.com/piterman93/check-in-app",
  },
  {
    id: 5,
    source: skills,
    alt: "moja apka",
    title: "check in app",
    technologies: "React | Redux | SCSS",
    live: "https://piterman93.github.io/check-in-app/",
    code: "https://github.com/piterman93/check-in-app",
  },
  {
    id: 6,
    source: skills,
    alt: "moja apka",
    title: "check in app",
    technologies: "React | Redux | SCSS",
    live: "https://piterman93.github.io/check-in-app/",
    code: "https://github.com/piterman93/check-in-app",
  },
];

export default function Portfolio() {
  const content = data.map((item) => (
    <PortfolioItem key={item.id} item={item} />
  ));
  return (
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
        <h1>{title}</h1>
        <div className="portfolio__card">{content}</div>
        <h1>{titleEnd}</h1>
      </div>
    </div>
  );
}
