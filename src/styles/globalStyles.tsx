import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  html,
  body {
    color: #424242;
    background-color: #fff;
    font-weight: 400;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-size: 16px;
  }


  *, button, input, select, label, h1, h2, h3, h4, h5, h6 {
    box-sizing: border-box;
  }

  button {
    cursor: pointer
  }


`;

export default GlobalStyle;
