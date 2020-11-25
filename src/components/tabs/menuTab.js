import React, { useState } from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";
import { StyledLink } from "../links";
import ButtonsTab from "./buttonTab";
import ColorsTab from "./colorsTab";
import TypescaleTab from "./typescaleTab";
import TypographyTab from "./typographyTab";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MenuTab = (props) => {
  return (
    <Router>
      <div
        className="menu-tabs"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "40px 380px 40px 380px",
        }}
      >
        {/* <StyledLink href="DefaultLink" to="/"></StyledLink> */}
        <StyledLink href="DefaultLink" to="/buttons">
          Buttons
        </StyledLink>
        <StyledLink href="DefaultLink" to="/color">
          Color
        </StyledLink>
        <StyledLink href="DefaultLink" to="/typography">
          Typography
        </StyledLink>
        <StyledLink href="DefaultLink" to="/typescale">
          Typescale
        </StyledLink>
      </div>

      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/buttons">
          <ButtonsTab />
        </Route>
        <Route exact path="/color">
          <ColorsTab />
        </Route>
        <Route exact path="/typography">
          <TypographyTab />
        </Route>
        <Route exact path="/typescale">
          <TypescaleTab />
        </Route>
      </Switch>
    </Router>
  );
};

export default MenuTab;
