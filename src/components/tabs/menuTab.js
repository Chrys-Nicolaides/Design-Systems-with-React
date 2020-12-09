import React, { useState } from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";
import StyledLink from "../links";
import ButtonsTab from "./buttonTab";
import ColorsTab from "./colorsTab";
import TypescaleTab from "./typescaleTab";
import TypographyTab from "./typographyTab";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { buttons } from "polished";
// import * as Tabs from "./tabs";

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
