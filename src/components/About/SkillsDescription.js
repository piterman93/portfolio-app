import React from "react";

import "../../styles/AboutDescription.scss";
import SkillItem from "./SkillItem";

const data = [
  { id: 1, title: "HTML5", percent: 80 },
  { id: 2, title: "CSS3 + (SASS)", percent: 80 },
  { id: 3, title: "JavaScript", percent: 70 },
  { id: 4, title: "TypeScript", percent: 40 },
  { id: 5, title: "React", percent: 80 },
  { id: 6, title: "React Native", percent: 50 },
  { id: 7, title: "Firebase", percent: 60 },
  { id: 8, title: "Git", percent: 70 },
];

export default function SkillsDescription() {
  const skillsList = data.map((item) => (
    <SkillItem
      key={item.id}
      title={item.title}
      percent={item.percent}
      className={`_${item.percent}`}
    />
  ));
  return (
    <div className="description__details">
      <h3>Skills</h3>
      <div className="scroll">
        <p>Technologies and tools I currently work with: </p>
        <div className="list">{skillsList}</div>
      </div>
    </div>
  );
}
