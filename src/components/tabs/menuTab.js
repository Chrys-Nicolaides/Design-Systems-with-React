import React from "react";
import StyledLink from "../links";
import { Link } from "react-router-dom";

const MenuTab = (props) => {
  return (
    <div
      className="menu-tabs"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "40px 380px 40px 380px",
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
  );
};

export default MenuTab;
