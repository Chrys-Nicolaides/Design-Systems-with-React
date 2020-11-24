import React, { useState } from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";
import ButtonsTab from "./buttonTab";
import ColorsTab from "./colorsTab";
import TypescaleTab from "./typescaleTab";
import TypographyTab from "./typographyTab";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MenuTab = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "40px 380px 40px 380px",
        }}
      >
        <Link to="/"></Link>
        <Link to="/buttons">Buttons</Link>
        <Link modifiers={["MenuButton"]} to="/color">
          Color
        </Link>
        <Link modifiers={["MenuButton"]} to="/typography">
          Typography
        </Link>
        <Link modifiers={["MenuButton"]} to="/typescale">
          Typescale
        </Link>
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
