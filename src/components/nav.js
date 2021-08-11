import React from 'react';
import LogoYahyaJideh from './icons/yahyajideh';

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <a href="#">
            <LogoYahyaJideh />
          </a>
          <ul>
            {/* <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">work</a>
            </li> */}
            <li>
              <a href="mailto:yahya.jideh@gmail.com">contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
