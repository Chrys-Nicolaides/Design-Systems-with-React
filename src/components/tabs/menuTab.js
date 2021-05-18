import React from "react";
import StyledLink from "../links";
import { Link } from "react-router-dom";
import { darkTheme, lightTheme, typeScale } from "../../systems";
import { ThemeProvider } from "styled-components";

const MenuTab = (props) => {
  const { useDarkTheme } = props;

  return (
    <ThemeProvider
      theme={useDarkTheme ? darkTheme : lightTheme}
      className="themeToggle"
    >
      <div className="nav-menu">
        <div
          className="project-name"
          style={{
            color: useDarkTheme
              ? lightTheme.projectName
              : darkTheme.projectName,
          }}
        >
          <h4
            style={{ fontSize: typeScale.h4 }}
            className="primary-font display-semibold"
          >
            Design
          </h4>
          <h4
            style={{ fontSize: typeScale.h4 }}
            className="primary-font heading-light"
          >
            Systems
          </h4>
        </div>

        <div
          className="menu-tabs"
          style={{
            color: useDarkTheme
              ? lightTheme.disabledBackgroundColor
              : darkTheme.disabledBackgroundColor,
          }}
        >
          <StyledLink
            style={{
              color: useDarkTheme
                ? lightTheme.disabledBackgroundColor
                : darkTheme.disabledBackgroundColor,
            }}
          >
            <Link to="/buttons">{props.ButtonsTab}Buttons</Link>
          </StyledLink>

          <StyledLink>
            <Link to="/color">{props.ColorsTab}Colours</Link>
          </StyledLink>

          <StyledLink>
            <Link to="/typography">{props.TypographyTab}Typography</Link>
          </StyledLink>

          <StyledLink>
            <Link to="/typescale">{props.TypescaleTab}Typescale</Link>
          </StyledLink>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MenuTab;
