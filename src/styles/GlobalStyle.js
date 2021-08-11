import { Global, css } from '@emotion/react';
import { Colors } from './variables';
import Fonts from './fonts';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${Fonts};

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'GreyCliff';
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

        padding: 0.75rem;
        box-shadow: 6px 6px ${Colors.purple};
        background-color: ${Colors.strawberry};
        transform: translate(-4px, -4px);
        transition: transform 0.2s, color 0.2s;

        &:hover {
          color: #fff;
          background-color: ${Colors.strawberry};
          box-shadow: 6px 6px ${Colors.purple};
          transform: translate(0px, 0px);
          box-shadow: none;
          cursor: pointer;
        }
      }

      section {
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
        padding-left: 12rem;
      }

      h1,
      h2 {
        font-size: 6rem;
        margin-bottom: 0.5rem;
      }

      h2 {
        color: ${Colors.h2};
      }

      p {
        font-size: 1.5rem;
        color: ${Colors.caption};
        margin-bottom: 1.5rem;
      }

      .social-icons {
        & svg {
          margin-right: 10px;
          width: 60px;
        }
      }

      @media only screen and (max-width: 1200px) {
        section {
          padding-left: 70px;
        }
      }

      @media only screen and (max-width: 900px) {
        h1,
        h2 {
          font-size: 3rem;
          margin-bottom: 0.25rem;
        }
        p {
          font-size: 1.25rem;
        }
        .social-icons {
          & svg {
            margin-right: 10px;
            width: 45px;
          }
        }
      }

      @media only screen and (max-width: 600px) {
        h1,
        h2 {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }
        p {
          font-size: 1rem;
        }
      }
    `}
  />
);

export default GlobalStyle;
