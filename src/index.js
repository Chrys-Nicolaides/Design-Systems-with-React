import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./systems";
import ButtonsTab from "./components/tabs/buttonTab";
import "./App.css";
import { TertiaryButton } from "./components/buttons";

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
        <h1
          style={{
            margin: "46px 0 0 0",
            fontSize: "96px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
          }}
        >
          Design Systems
        </h1>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <button
            style={{
              margin: "0 46px 0 46px",
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
      <div>
        <p
          style={{
            margin: "46px 46px 0 46px",
            fontFamily: "Source Sans Pro",
            fontWeight: "300",
            width: "60%",
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas
          turpis et sapien commodo, id viverra quam pharetra. Maecenas elit
          ligula, facilisis in odio sodales, eleifend ultricies sapien. Cras
          nisi enim, ornare at erat eget, varius consectetur erat. Curabitur
          feugiat ante sem, a tempor sapien volutpat at.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "40px 380px 40px 380px",
          }}
        >
          <TertiaryButton>Buttons</TertiaryButton>
          <TertiaryButton>Colors</TertiaryButton>
          <TertiaryButton>Typography</TertiaryButton>
          <TertiaryButton>Typescale</TertiaryButton>
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
