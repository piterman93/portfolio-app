import React from "react";
import "../styles/SideMenu.scss";

export default function SideMenu({ showHeaderMenu, showMenuHandler }) {
  const menuClasses = `menu ${showHeaderMenu && "menu_active"}`;
  return (
    <div className={menuClasses}>
      <div className="menu__top">
        <ul>
          <li onClick={showMenuHandler}>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="menu__bottom">ikony</div>
    </div>
  );
}
