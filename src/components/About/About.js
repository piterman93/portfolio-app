import React, { useState } from "react";

import "../../styles/About.scss";

import myPhoto from "../../assets/moje.jpg";
import skills from "../../assets/skills.jpg";
import hobbies from "../../assets/hobbies.jpg";

import AboutDescription from "./AboutDescription";
import SkillsDescription from "./SkillsDescription";
import HobbiesDescription from "./HobbiesDescription";

const data = [
  { id: 1, title: "About me", image: myPhoto },
  { id: 2, title: "Skills", image: skills },
  { id: 3, title: "Hobbies", image: hobbies },
];

export default function About() {
  const [activeItem, setActiveItem] = useState(data[0]);

  const activeItemHandler = (item) => {
    setActiveItem(item);
  };

  const listContent = data.map((item) => {
    let className;
    if (activeItem.id === item.id) {
      className = "active";
    } else className = "";
    return (
      <li
        key={item.id}
        className={className}
        onClick={() => activeItemHandler(item)}
      >
        {item.title}
      </li>
    );
  });

  const descriptionContent =
    activeItem.id === 1 ? (
      <AboutDescription />
    ) : activeItem.id === 2 ? (
      <SkillsDescription />
    ) : (
      <HobbiesDescription />
    );

  const title = "<about me>";
  const titleEnd = "</about me>";

  return (
    <div className="about" id="about">
      <div className="wrapper">
        <h1>{title}</h1>
        <div className="about__card">
          <ul>{listContent}</ul>
          <div className="container">
            <div className="description">{descriptionContent}</div>
            <div className="image__container">
              <img src={activeItem.image} alt="my photos" />
            </div>
          </div>
        </div>
        <h1>{titleEnd}</h1>
      </div>
    </div>
  );
}
