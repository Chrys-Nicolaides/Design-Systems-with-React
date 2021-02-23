import React, { useState } from "react";
import StyledLink from "../links";
import { Link } from "react-router-dom";
import { darkTheme, lightTheme } from "../../systems";
import { ThemeProvider } from "styled-components";

const MenuTab = (props) => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);

  return (
    <ThemeProvider
      theme={useDarkTheme ? darkTheme : lightTheme}
      className="themeToggle"
      style={{
        color: useDarkTheme ? lightTheme.textColor : darkTheme.textColor,
      }}
    >
      <div className="nav-menu">
        <div className="project-name">
          <h5>Design</h5>
          <h6>Systems</h6>
        </div>

        <div
          className="menu-tabs"
          style={{
            color: useDarkTheme
              ? lightTheme.textColorInverted
              : darkTheme.defaultText,
          }}
        >
          <StyledLink>
            <Link to="/buttons">{props.ButtonsTab}Buttons</Link>
          </StyledLink>

          <StyledLink>
            <Link to="/color">{props.ColorsTab}Color</Link>
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
