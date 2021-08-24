import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const { setIsSidebarOpen, setIsSubMenuOpen, openSubmenu } =
    useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    console.log(page);
    const tempBtn = e.target.getBoundingClientRect();
    const center = tempBtn.left;
    const bottom = tempBtn.bottom;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      setIsSubMenuOpen(false);
    }
  };

  return (
    <nav className="nav-wrapper" onMouseOver={handleSubmenu}>
      <div className="nav-container">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="menu-btn btn"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container">
          <ul className="links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Company
              </button>
            </li>
          </ul>
        </div>

        <button className="signin-btn btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
