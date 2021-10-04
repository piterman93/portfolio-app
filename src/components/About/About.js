import React, { useState } from "react";

import "../../styles/About.scss";

import myPhoto from "../../assets/moje.jpg";
import skills from "../../assets/skills.jpg";
import hobbies from "../../assets/hobbies.jpg";

import AboutDescription from "./AboutDescription";
import SkillsDescription from "./SkillsDescription";
import HobbiesDescription from "./HobbiesDescription";

const data = [
  { id: 1, title: "About me" },
  { id: 2, title: "Skills" },
  { id: 3, title: "Hobbies" },
];

export default function About() {
  const [activeText, setActiveText] = useState(1);

  const activeTextHandler = (id) => {
    setActiveText(id);
  };

  const photoSource =
    activeText === 1 ? myPhoto : activeText === 2 ? skills : hobbies;

  const descriptionContent =
    activeText === 1 ? (
      <AboutDescription />
    ) : activeText === 2 ? (
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
          <ul>
            {data.map((item) => {
              let className;
              if (activeText === item.id) {
                className = "active";
              } else className = "";
              return (
                <li
                  key={item.id}
                  className={className}
                  onClick={() => activeTextHandler(item.id)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
          <div className="container">
            <div className="description">{descriptionContent}</div>
            <div className="image__container">
              <img src={photoSource} alt="my photos" />
            </div>
          </div>
        </div>
        <h1>{titleEnd}</h1>
      </div>
    </div>
  );
}
