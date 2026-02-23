import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
  const [activePage, setActivePage] = useState("passport");

  return (
    <UIContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
console.log("UIContext loaded");
