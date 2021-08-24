import React from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./Data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <div className={`${isSidebarOpen ? "sidebar-mask show" : "sidebar-mask"}`}>
      <div className="sidebar-container">
        <button className="btn" onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </button>

        {sublinks.map((link, index) => {
          const { page, links } = link;
          return (
            <div className="link" key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublink">
                {links.map((item, index) => {
                  const { label, url, icon } = item;
                  return (
                    <a href={url} key={index}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
