/* eslint-disable no-redeclare */
import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    {
      section: "sobre-nos",
      type: "",
    },
    {
      title: "Programação",
      dropdownItems: [
        { label: "Palestras", path: "/palestras" },
        { label: "Workshops", path: "/workshops" },
        { label: "Oficinas", path: "/oficinas" },
        { label: "Performance", path: "/performance" },
      ],
      type: "button",
    },
    {
      title: "Visitação",
      dropdownItems: [
        { label: "Como chegar", href: "https://www.google.com.br/maps/dir/-2.5286459,-44.2952611/multicenter+neg%C3%B3cios+e+eventos/@-2.5144732,-44.2965449,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x7f68ddd8bc4719d:0xb967a0aada8a5665!2m2!1d-44.2670215!2d-2.5033531"},
        { label: "Ambiente", path: "/" },
        { label: "Saiba mais", path: "/" },
  
      ],
      type: "button",
    },
    {
      section: "expositores",
      type: "",
    },
    {
      section: "parceiros",
      type: "",
    },
  ];

  function handleDropdownClick(index) {
    setActiveDropdown(activeDropdown === index ? null : index);
  }

  function handleLinkClick() {
    setActiveDropdown(null);
    setMenuOpen(false);
  }

  function handleMenuIconClick() {
    setMenuOpen(!menuOpen);
  }

  function handleScroll(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  function handleLinkClick(event, href) {
    event.preventDefault();
    window.location.href = href;
  }

  return (
    <div>
      <div className="menu-icon-div">
        <button className="menu-icon" onClick={handleMenuIconClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`ul-menu ${menuOpen ? "show" : ""} div-li-buttons`}>
        <li>
          <button
            className="li-button"
            onClick={() => handleScroll("sobre-nos")}
          >
            Sobre Nós
          </button>
        </li>
        <li>
          <button
            className="li-button"
            onClick={() => handleScroll("expositores")}
          >
            Expositores
          </button>
        </li>
        <li>       
          <button
            className="li-button btn-par"
            onClick={() => handleScroll("parceiros")}

          >
            Parceiros
          </button>
        </li>
        {menu.map((item, index) =>
  item.type === "link" ? (
    <li className="li-link" key={index}>
      <a
        href={item.href}
        className="li-links-title"
        onClick={(event) => handleLinkClick(event, item.href)}
      >
        {item.title}
      </a>
    </li>
  ) : item.type === "button" ? (
    <li key={index}>
      {activeDropdown === index && (
        <ul className="dropdown-menu show">
          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
            <li key={dropdownIndex}>
              {dropdownItem.href ? (
                <a
                  href={dropdownItem.href}
                  className="li-link-dropdown"
                  onClick={(event) => handleLinkClick(event, dropdownItem.href)}
                >
                  {dropdownItem.label}
                </a>
              ) : (
                <NavLink
                  className="li-link-dropdown"
                  to={dropdownItem.path}
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  {dropdownItem.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
      <button
        className="li-button btn-prog"
        onClick={() => handleDropdownClick(index)}
      >
        {item.title}
      </button>
    </li>
  ) : null
)}

      </ul>
    </div>
  );
  
};

export default Menu;
