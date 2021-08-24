import React, { useContext, useState } from "react";

import sublinks from "./Data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [item, setItem] = useState({ page: "", links: [] });
  const [location, setLocatoin] = useState({});

  const openSubmenu = (text, coor) => {
    const page = sublinks.find((link) => link.page === text);
    setItem(page);
    setLocatoin(coor);
    setIsSubMenuOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubMenuOpen,
        setIsSidebarOpen,
        setIsSubMenuOpen,
        item,
        location,
        openSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
