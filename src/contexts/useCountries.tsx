import React, { createContext, useContext, useState } from 'react';

interface Country {
  code: string;
  name: string;
  emoji: string;
  capital: string;
}

interface CountriesContextData {
  countries: Country[] | undefined;
  setCountries: (countries: Country[]) => void;
}

const CountriesContext = createContext<CountriesContextData | undefined>(
  undefined
);

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => {
  const ctx = useContext(CountriesContext);
  if (!ctx)
    throw new Error('`useCountries` must be used within a CountriesProvider');
  return ctx;
};

export default CountriesProvider;
