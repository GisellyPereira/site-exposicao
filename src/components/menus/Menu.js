import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    {
      title: "Sobre nós",
      dropdownItems: [
        { label: "Quem somos", path: "/quem-somos" },
        { label: "Por que visitar", path: "/por-que-visitar" },
        { label: "Regulamento", path: "/regulamento" },
        { label: "Política de Privacidade", path: "/politica-de-privacidade" },
      ],
    },
    {
      title: "Visitação",
      dropdownItems: [
        { label: "Mapa da feira", path: "/mapa-da-feira" },
        { label: "Hotéis", path: "/hoteis" },
        { label: "Restaurantes", path: "/restaurantes" },
        { label: "Pontos turísticos", path: "/pontos-turisticos" },
      ],
    },
    {
      title: "Programação",
      dropdownItems: [
        { label: "Palestras", path: "/palestras" },
        { label: "Workshops", path: "/workshops" },
        { label: "Oficinas", path: "/oficinas" },
        { label: "Shows e Performance", path: "/shows" },
      ],
    },
    {
      title: "Expositores",
      link: "/exp",
      type: "link",
    },
    {
      title: "Parceiros",
      link: "/part",
      type: "link",
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

  return (
    <div>
      <div className="menu-icon-div">
        <button className="menu-icon" onClick={handleMenuIconClick}> {/* adiciona evento onClick */}
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`ul-menu ${menuOpen ? 'show' : ''}`}> {/* adiciona a classe 'show' se menuOpen for true */}
        {menu.map((item, index) =>
          item.type === "link" ? (
            <li key={index}>
              <Link
                to={item.link}
                className="li-links-title"
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={index}>
              <button
                className="li-button"
                onClick={() => handleDropdownClick(index)}
              >
                {item.title}
              </button>
              {activeDropdown === index && (
                <ul className="dropdown-menu show">
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <NavLink
                        className="li-link-dropdown"
                        to={dropdownItem.path}
                        activeClassName="active"
                        onClick={handleLinkClick}
                      >
                        {dropdownItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Menu;
