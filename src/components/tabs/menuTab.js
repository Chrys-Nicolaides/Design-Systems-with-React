import React, { useState } from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";
import ButtonsTab from "./buttonTab";
import ColorsTab from "./colorsTab";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MenuTab = (props) => {
  // let { isExpanded, setIsExpanded } = props;
  // console.log(isExpanded);
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
        <MenuButton
          modifiers={["MenuButton"]}
          // onClick={() =>
          //   setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
          // }
          to="/buttons"
        >
          Buttons
        </MenuButton>
        <MenuButton to="/color">Colors</MenuButton>
        <MenuButton to="/typography">Typography</MenuButton>
        <MenuButton to="/typescale">Typescale</MenuButton>

        <Switch>
          {/* <Route exact path="/buttons">
            <ButtonsTab />
          </Route>
          <Route exact path="/color">
            <ColorsTab />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default MenuTab;
