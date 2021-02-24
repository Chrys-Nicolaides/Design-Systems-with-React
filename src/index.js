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
        <div className="theme-button-div">
          <button
            className="theme-button flex"
            style={{
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

        <div className="home-page-div">
          <h1>Design Systems</h1>
          <div style={{ display: "flex", alignItems: "flex-end" }}></div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              egestas turpis et sapien commodo, id viverra quam pharetra.
              Maecenas elit ligula, facilisis in odio sodales, eleifend
              ultricies sapien. Cras nisi enim, ornare at erat eget, varius
              consectetur erat. Curabitur feugiat ante sem, a tempor sapien
              volutpat at.
            </p>
          </div>
        </div>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/buttons">
            <ButtonsTab useDarkTheme={useDarkTheme} />
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
