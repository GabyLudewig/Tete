import { createContext, useState } from "react";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [sesion, setSesion] = useState({});
 
  return (
    <GlobalContext.Provider value={{ sesion, setSesion }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
