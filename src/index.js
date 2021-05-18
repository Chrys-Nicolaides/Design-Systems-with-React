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
            <p className="secondary-font heading-light">
              Design systems include a series of reusable UI Components to
              develop new experiences.
              <p className="p-text secondary-font heading-light">
                These pre-defined, reusable UI components allow teams to build
                scalable, complex and accessible user interfaces across multiple
                projects at a faster pace. They serve as tools for both
                designers and developers, with the objective of creating
                consistency and a clear set of shared goals when building
                websites and applications, including multiple elements from
                components, patterns and colour use to more abstract principles
                such as brand and product values. These systems take previously
                encountered challenges and issues into account and provide a
                better, more informed way of building systems that provide a
                more consistent, unified user experience. These systems provide
                a more efficient way for designers and developers to produce
                work faster and make the collaboration and handoff process
                overall a lot smoother.
              </p>{" "}
              <p className="p-text secondary-font heading-light">
                “A Design System is the single source of truth which groups all
                the elements that will allow the teams to design, realize and
                develop a product.” - UX Collective.
              </p>
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
              className="primary-font"
              useDarkTheme={useDarkTheme}
              title={"Buttons"}
            />
          </Route>
          <Route path="/color">
            <ColorsTab
              className="secondary-font"
              useDarkTheme={useDarkTheme}
              title={"Color"}
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
