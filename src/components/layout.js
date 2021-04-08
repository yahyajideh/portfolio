import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Nav></Nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
