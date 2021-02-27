import { createGlobalStyle } from "styled-components";
import { primaryFont, secondaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  // font-size: 16px;
}
// *, *:before, *:after {
//   box-sizing: inherit;
// }
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
  font-weight: 300;
}


p {
  font-family: ${secondaryFont};
  font-weight: 300;
}



`;
