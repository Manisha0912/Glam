import { createContext } from "react";
// import { beautician } from "../assets/assets";

export const BeauticianContext = createContext();
const BeauticianContextProvider = (props) => {
  const value = {
    // beautician,
  };

  return (
    <BeauticianContext.Provider value={value}>{props.children}</BeauticianContext.Provider>
  );
};

export default BeauticianContextProvider;
