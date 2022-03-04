import {createContext,useState} from "react";
const AmigoContext = createContext();

const AmigoProvider = ({ children }) => {
    const [amigoIiGlobal, setpamigoIiGlobal] = useState();
    return (
      <AmigoContext.Provider value={{ amigoIiGlobal, setpamigoIiGlobal }}>
        {children}
      </AmigoContext.Provider>
    );
  };
  

export {AmigoContext,AmigoProvider}