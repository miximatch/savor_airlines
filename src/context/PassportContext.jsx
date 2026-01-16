import { createContext, useContext, useState } from "react";

const PassportContext = createContext();

const INITIAL_COUNTRIES = [
  {
    code: "IT",
    name: "Italy",
    unlocked: true, // start with 1 unlocked country
    stamps: 1,
  },
  {
    code: "JP",
    name: "Japan",
    unlocked: false,
    stamps: 0,
  },
  {
    code: "MX",
    name: "Mexico",
    unlocked: false,
    stamps: 0,
  },
];

export function PassportProvider({ children }) {
  const [countries, setCountries] = useState(INITIAL_COUNTRIES);
  const [currentFlight, setCurrentFlight] = useState(null);

  const unlockCountry = (countryCode) => {
    setCountries((prev) =>
      prev.map((c) =>
        c.code === countryCode
          ? { ...c, unlocked: true, stamps: c.stamps + 1 }
          : c
      )
    );
  };

  const startFlight = (countryCode) => {
    setCurrentFlight(countryCode);
  };

  const completeFlight = () => {
    if (!currentFlight) return;
    unlockCountry(currentFlight);
    setCurrentFlight(null);
  };

  return (
    <PassportContext.Provider
      value={{
        countries,
        unlockedCountries: countries.filter((c) => c.unlocked),
        lockedCountries: countries.filter((c) => !c.unlocked),
        currentFlight,
        startFlight,
        completeFlight,
      }}
    >
      {children}
    </PassportContext.Provider>
  );
}

export const usePassport = () => useContext(PassportContext);
