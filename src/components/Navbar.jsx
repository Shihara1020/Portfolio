import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,         // home
  faUser,         // about
  faCode,         // works/projects
  faEnvelope,     // contact
  faFileAlt       // CV
} from '@fortawesome/free-solid-svg-icons';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // Updated to include home icon mapping
  const getIconForNavItem = (id, title) => {
    switch(id) {
      case 'home':
        return faHome;
      case 'about':
        return title === 'CV' ? faFileAlt : faUser;
      case 'works':
        return faCode;
      case 'contact':
        return faEnvelope;
      default:
        return faUser;
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2 logo hover:scale-105 transition-transform"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            <span className="text-[#915eff] font-bold">&lt;</span>
            <span className="mx-1">Shihara</span>
            <span className="text-[#915eff] font-bold">/&gt;</span>
            <span className="text-gray-400 ml-2 font-mono font-normal hidden md:inline italic text-sm border-l border-gray-600 pl-2">
              Computer Science Engineer
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.title}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white cursor-pointer font-medium text-[18px]`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>
                <FontAwesomeIcon 
                  icon={getIconForNavItem(nav.id, nav.title)} 
                  className="mr-2" 
                />
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.title}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>
                    <FontAwesomeIcon 
                      icon={getIconForNavItem(nav.id, nav.title)} 
                      className="mr-2" 
                    />
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;