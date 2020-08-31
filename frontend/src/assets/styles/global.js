import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  html, body {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colorPrimaryBackground};
    color: ${props => props.theme.colorPrimaryText};
  }

  body a {
    text-decoration: none;
    color: ${props => props.theme.colorPrimaryText} !important;
  }


  @media (min-width) {
    font-size: 62.5%;
  }
`;
