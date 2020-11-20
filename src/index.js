import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme, purpleTheme } from "./systems";
import ButtonsTab from "./components/tabs/buttonTab";
import MenuTab from "./components/tabs/menuTab";
import "./App.css";

const App = () => {
  let [isExpanded, setIsExpanded] = useState({
    primary: false,
    secondary: false,
  });
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  return (
    <div
      className="full-background"
      style={{
        background: useDarkTheme
          ? lightTheme.primaryBackgroundColor
          : darkTheme.primaryBackgroundColor,
        color: useDarkTheme
          ? lightTheme.textColorInverted
          : darkTheme.defaultText,
        fontFamily: "Fira Sans Condensed",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "40px",
        }}
      >
        <button
          style={{
            margin: "0 46px 0 46px",
            padding: "8px",
            background: "none",
            borderRadius: "50px",
            color: useDarkTheme ? lightTheme.textColor : darkTheme.defaultText,
          }}
          onClick={() => {
            setUseDarkTheme(!useDarkTheme);
          }}
        >
          {useDarkTheme ? "dark mode" : "light mode"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
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

        <div style={{ display: "flex", alignItems: "flex-end" }}></div>
      </div>
      <div>
        <p
          style={{
            margin: "46px 46px 66px 46px",
            fontFamily: "Source Sans Pro",
            fontWeight: "300",
            width: "50%",
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
        <div></div>
      </div>
      <ThemeProvider
        theme={useDarkTheme ? darkTheme : lightTheme}
        className="themeToggle"
        style={{
          color: useDarkTheme ? lightTheme.textColor : darkTheme.textColor,
        }}
      >
        <MenuTab setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
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
          {/* <ButtonsTab isExpanded={isExpanded} /> */}
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
