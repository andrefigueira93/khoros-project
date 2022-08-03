import React, { PropsWithChildren } from 'react';
import CountriesProvider from '../contexts/useCountries';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <CountriesProvider>
      <Header />
      {children}
      <Footer />
    </CountriesProvider>
  );
};

export default Layout;
