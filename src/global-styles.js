import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Orbitron';
    src: url('./font/Orbitron-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Orbitron';
    src: url('./font/Orbitron-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pixel';
    src: url('font/Pixel-LCD-7.woff') format('woff');
  }

  body {
    margin: 0;
    touch-action: manipulation;
  }
`;

export default GlobalStyle;
