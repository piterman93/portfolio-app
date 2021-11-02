import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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

      <div className="menu__bottom">
        <div className="icon__wrapper">
          <a
            href="https://github.com/piterman93"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <GitHubIcon />
          </a>
        </div>
        <div className="icon__wrapper">
          <a
            href="https://www.linkedin.com/in/piotrmaniak93/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="icon__wrapper">
          <a
            href="https://www.facebook.com/piotrek.maniak"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
        </div>
        <div className="icon__wrapper">
          <a
            href="https://www.instagram.com/piterman93/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
