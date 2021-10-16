import "../../styles/AboutDescription.scss";

import React from "react";

export default function SkillItem({ title, percent, className }) {
  const barClassName = `item__progress ${className}`;
  return (
    <div className="list__item">
      <span>{title}</span>
      <div className="item__bar">
        <span>{percent} %</span>
        <div className={barClassName}></div>
      </div>
    </div>
  );
}
