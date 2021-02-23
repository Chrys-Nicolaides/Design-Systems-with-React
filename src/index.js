import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./systems";
import ButtonsTab from "./components/tabs/buttonTab";
import MenuTab from "./components/tabs/menuTab";
import ColorsTab from "./components/tabs/colorsTab";
import TypescaleTab from "./components/tabs/typescaleTab";
import TypographyTab from "./components/tabs/typographyTab";
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
        color: useDarkTheme
          ? lightTheme.textColorInverted
          : darkTheme.defaultText,
        background: useDarkTheme
          ? lightTheme.primaryBackgroundColor
          : darkTheme.primaryBackgroundColor,
        fontFamily: "Fira Sans Condensed",
        minHeight: "100vh",
        height: "auto",
      }}
    >
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "40px",
          }}
        >
          <button
            className="theme-button"
            style={{
              display: "flex",
              justifyContent: "center",
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

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <h1
            style={{
              marginTop: "46px",
              fontSize: "96px",
              textAlign: "left",
              marginLeft: "100px",
            }}
          >
            Design Systems
          </h1>
          <div style={{ display: "flex", alignItems: "flex-end" }}></div>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Source Sans Pro",
              fontWeight: "300",
              textAlign: "left",
              marginLeft: "280px",
              marginRight: "280px",
              marginBottom: "100px",
              marginTop: "40px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas
            turpis et sapien commodo, id viverra quam pharetra. Maecenas elit
            ligula, facilisis in odio sodales, eleifend ultricies sapien. Cras
            nisi enim, ornare at erat eget, varius consectetur erat. Curabitur
            feugiat ante sem, a tempor sapien volutpat at.
          </p>
          {/* <div>Hi Santhe!!!</div> */}
        </div>

        <Switch>
          <Route exact path="/"></Route>
          <Route path="/buttons">
            <ButtonsTab />
          </Route>
          <Route path="/color">
            <ColorsTab useDarkTheme={useDarkTheme} />
          </Route>
          <Route path="/typography">
            <TypographyTab />
          </Route>
          <Route path="/typescale">
            <TypescaleTab />
          </Route>
        </Switch>

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
