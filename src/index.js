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
import { ReactComponent as SunIcon } from "./components/icons/sun-icon.svg";
import { ReactComponent as MoonIcon } from "./components/icons/moon-icon.svg";
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
      >
        <MenuTab
          setIsExpanded={setIsExpanded}
          isExpanded={isExpanded}
          useDarkTheme={useDarkTheme}
        />
        <div className="theme-button-div">
          <button
            className="theme-button flex"
            style={{
              color: useDarkTheme
                ? lightTheme.themeButton
                : darkTheme.themeButton,
              background: useDarkTheme
                ? lightTheme.primaryBackgroundFirst
                : darkTheme.primaryBackgroundFirst,
            }}
            onClick={() => {
              setUseDarkTheme(!useDarkTheme);
            }}
          >
            {useDarkTheme ? "dark mode" : "light mode"}
            {useDarkTheme ? (
              <MoonIcon
                style={{
                  color: darkTheme.themeButton,
                }}
              />
            ) : (
              <SunIcon
                style={{
                  color: lightTheme.themeButton,
                }}
              />
            )}
          </button>
        </div>

        <div className="home-page-div">
          <h1 className="primary-font display-bold">Design Systems</h1>
          <div></div>
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
        <Switch
          style={{
            color: useDarkTheme ? lightTheme.textColor : darkTheme.defaultText,
          }}
        >
          <Route exact path="/"></Route>
          <Route path="/buttons">
            <ButtonsTab
              useDarkTheme={useDarkTheme}
              title={"Buttons"}
              style={{ fontFamily: darkTheme.primaryFont }}
            />
          </Route>
          <Route path="/color">
            <ColorsTab
              useDarkTheme={useDarkTheme}
              title={"Color"}
              style={{ fontFamily: darkTheme.secondaryFont }}
            />
          </Route>
          <Route path="/typography">
            <TypographyTab useDarkTheme={useDarkTheme} title={"Typography"} />
          </Route>
          <Route path="/typescale">
            <TypescaleTab useDarkTheme={useDarkTheme} title={"Typescale"} />
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
