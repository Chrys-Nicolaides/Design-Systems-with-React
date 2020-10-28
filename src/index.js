import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/buttons";
import { GlobalStyle, darkTheme, defaultTheme } from "./systems";

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(true);
  return (
    <div>
      <div>
        <h1>Design Systems</h1>
        <h2>Buttons</h2>
      </div>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setDarkTheme(true)}
        >
          Dark theme
      </button>

        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setDarkTheme(false)}
        >
          Default theme
      </button>
        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            position: "fixed",
            zIndex: -1,
          }}
        ></div>
        <div style={{
          margin: "0 4px 24px", padding: "8px", paddingTop: "20px"
        }}>
          <PrimaryButton style={{
            margin: "0 16px 24px"
          }}>Primary Button</PrimaryButton>
          < SecondaryButton > Secondary Button</SecondaryButton>
          <TertiaryButton>Tertiary Button</TertiaryButton>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);

