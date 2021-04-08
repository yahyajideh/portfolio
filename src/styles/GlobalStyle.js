import { Global, css } from '@emotion/react';
import { Colors } from './variables';
// import Fonts from './fonts';

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Greycliff';
        src: url('../fonts/Greycliff/greycliffcf-bold-webfont.woff2');
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'Arial';
        height: 100vh;
        background-color: ${Colors.bg};
        border: 15px solid ${Colors.purple};
        color: ${Colors.bodyText};
        font-size: 18px;
      }

      header,
      section {
        padding: 0 70px;
      }

      header {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 90px 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      nav .logo {
        position: relative;
        max-width: 80px;
      }

      nav ul {
        position: relative;
        display: flex;
      }

      nav ul li {
        list-style: none;
      }

      nav ul li a {
        display: inline-block;
        font-weight: 400;
        margin-left: 40px;
        text-decoration: none;
        color: ${Colors.bodyText};
      }

      section {
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
      }

      h1,
      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 1.5rem;
      }
    `}
  />
);

export default GlobalStyle;
