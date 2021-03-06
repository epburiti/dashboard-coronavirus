import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Open Sans', sans-serif;
    /* min-width:100vw; */
  }
  body { font-size: calc(1em + 1vw); }
`;