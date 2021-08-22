import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <AppContext.Provider value={{ menu, modal, setMenu, setModal }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
