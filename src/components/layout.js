import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header></header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
