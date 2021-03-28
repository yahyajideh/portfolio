import { Global, css } from '@emotion/react';
import { Colors } from './variables';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        height: 100vh;
        background-color: ${Colors.bg};
        border: 15px solid ${Colors.purple};
        color: ${Colors.bodyText};
      }
    `}
  />
);

export default GlobalStyle;
