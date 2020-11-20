import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: ${primaryFont}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body, #root, #root > div {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}

`;
