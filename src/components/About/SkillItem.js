import "../../styles/AboutDescription.scss";

import React from "react";

export default function SkillItem({ title, percent, className }) {
  const barClassName = `item_progress ${className}`;
  return (
    <div className="list_item">
      <span>{title}</span>
      <div className="item_bar">
        <span>{percent} %</span>
        <div className={barClassName}></div>
      </div>
    </div>
  );
}
