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
    <div
      className="menu-tabs"
      style={{
        display: "flex",
        flexDirection: "row",
        paddingRight: "100px",
        marginLeft: "166px",
        textAlign: "left",
        paddingTop: "40px",
        color: useDarkTheme ? lightTheme.textColorInverted : darkTheme.defaultText,
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
    </ThemeProvider>
  );
};

export default MenuTab;
