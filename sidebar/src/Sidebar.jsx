import React from "react";
import logo from "./logo.svg";
import { useGlobalContext } from "./Context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./Data";
const Sidebar = () => {
  const { menu, setMenu } = useGlobalContext();
  return (
    <aside
      className={`${menu ? "sidebar-container show" : "sidebar-container"}`}
    >
      <div className="side-header">
        <img src={logo} alt="logo" />
        <button onClick={() => setMenu(false)}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon}
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <ul className="icons">
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
