import React, { useState } from "react";
import StyledLink from "../links";
import { Link } from "react-router-dom";
import { darkTheme, lightTheme } from "../../systems";
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
          <h5>Design</h5>
          <h6>Systems</h6>
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
            <Link to="/color">{props.ColorsTab}Colors</Link>
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
