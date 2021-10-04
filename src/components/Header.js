import React, { useEffect, useState } from "react";

import "../styles/Header.scss";

import SideMenu from "./SideMenu";
import logo from "../assets/logo-transparent.png";

export default function Header() {
  const [headerActive, setHeaderActive] = useState(true);
  const [showBorder, setShowBorder] = useState(false);
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);

  let oldValue = 0;

  const controlHeader = () => {
    const newValue = window.pageYOffset;
    if (oldValue - newValue > 0) {
      setHeaderActive(true);
      setShowBorder(true);
      setShowHeaderMenu(false);
    }
    if (oldValue - newValue < 0 && window.scrollY > 10) {
      setHeaderActive(false);
      setShowHeaderMenu(false);
      setShowBorder(false);
    }
    if (window.scrollY === 0) {
      setShowBorder(false);
    }
    oldValue = newValue;
  };

  const showMenuHandler = () => {
    setShowHeaderMenu((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  const headerClasses = `header 
  ${!headerActive && "hided"} 
  ${showBorder && "show_border"} 
  ${showHeaderMenu && "menu_active"}`;

  return (
    <>
      <div className={headerClasses}>
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="logo Piotr Maniak" />
          </a>
        </div>
        <div className="hamburger" onClick={showMenuHandler}>
          <span className="line 1"></span>
          <span className="line 2"></span>
          <span className="line 3"></span>
        </div>
      </div>
      <SideMenu
        showHeaderMenu={showHeaderMenu}
        showMenuHandler={showMenuHandler}
      />
    </>
  );
}
