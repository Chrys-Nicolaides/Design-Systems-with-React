import { createGlobalStyle } from "styled-components";
import { primaryFont, secondaryFont } from "./typography";
import { normalize } from "polished";
import { darkTheme } from "../systems";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  // font-size: 18px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body, #root, #root > div {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}

a, button {
  font-family: ${primaryFont};
}

.primary-font {
  font-family: ${primaryFont};
}

.secondary-font {
  font-family: ${secondaryFont};
  font-size: 18px;

}

.display-bold {
  font-weight: 700;
}

.display-semibold {
  font-weight: 600;
}

.heading-regular {
  font-weight: 400;
}

.heading-light {
  font-weight: 400;
}

.underlined-heading {
  padding-bottom: 22px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${darkTheme.disabledBackgroundColor};
}

p > .p-text {
  padding-top: 32px;
  padding-bottom: 0;
  width: 100%;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
}

`;
