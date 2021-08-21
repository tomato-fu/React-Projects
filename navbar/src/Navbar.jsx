import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [showlist, setshowlist] = useState(false);
  const navText = useRef(null);
  const linkContainer = useRef(null);
  useEffect(() => {
    const linkheight = navText.current.getBoundingClientRect().height;
    if (showlist) {
      linkContainer.current.style.height = `${linkheight}px`;
    } else {
      linkContainer.current.style.height = "0px";
    }
  }, [showlist]);

  return (
    <nav>
      <div className="navbar-content">
        <div className="navbar-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setshowlist(!showlist)}>
            <FaBars />
          </button>
        </div>

        <div className="link-container" ref={linkContainer}>
          <ul className="nav-text" ref={navText}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="nav-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
