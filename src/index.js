import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./systems";
import ButtonsTab from "./components/tabs/buttonTab";
import "./App.css";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  return (
    <div
      style={{
        background: useDarkTheme
          ? lightTheme.primaryBackgroundColor
          : darkTheme.primaryBackgroundColor,
        color: useDarkTheme
          ? lightTheme.textColorInverted
          : darkTheme.defaultText,
        width: "100%",
        height: "100%",
        fontFamily: "Fira Sans Condensed",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: "46px 0 0 46px", fontSize: "96px" }}>
          Design Systems
        </h1>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <button
            style={{
              margin: "0 46px 0 0",
              padding: "8px",
              background: "none",
              borderRadius: "50px",
              color: useDarkTheme
                ? lightTheme.textColor
                : darkTheme.defaultText,
            }}
            onClick={() => {
              setUseDarkTheme(!useDarkTheme);
            }}
          >
            {useDarkTheme ? "dark mode" : "light mode"}
          </button>
        </div>
      </div>
      <ThemeProvider
        theme={useDarkTheme ? darkTheme : lightTheme}
        className="themeToggle"
        style={{
          color: useDarkTheme ? lightTheme.textColor : darkTheme.textColor,
        }}
      >
        <div
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundColor
              : darkTheme.primaryBackgroundColor,
            color: useDarkTheme
              ? lightTheme.textColorInverted
              : darkTheme.defaultText,
          }}
        >
          <ButtonsTab />
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
