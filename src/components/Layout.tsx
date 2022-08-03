import React from 'react';
import CountriesProvider from '../contexts/useCountries';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <CountriesProvider>
      <Header />
      {children}
      <Footer />
    </CountriesProvider>
  );
};

export default Layout;
