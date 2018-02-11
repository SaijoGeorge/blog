import { injectGlobal } from "styled-components"
import { font } from "."

injectGlobal`
  @font-face {
    font-family: 'Atma';
    font-style: normal;
    font-weight: 600;
    src: local('Atma SemiBold'), local('Atma-SemiBold'), url(https://fonts.gstatic.com/s/atma/v2/4VYRJUTmCFM7TxNGjTCblw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v4/hMqPNLsu_dywMa4C_DEpY44P5ICox8Kq3LLUNMylGO4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  :root {
    font-size: ${font.base}px;
    ${font.primary};
  }

  body,
  figure,
  pre {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    font: inherit;
    cursor: pointer;
  }

  code {
    font: inherit;
  }
`
