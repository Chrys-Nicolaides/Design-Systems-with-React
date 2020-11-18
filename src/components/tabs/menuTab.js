import React, { useState } from "react";
import { MenuButton } from "../buttons";

const MenuTab = (props) => {
  let { isExpanded, setIsExpanded } = props;
  console.log(isExpanded);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "40px 380px 40px 380px",
        }}
      >
        <MenuButton
          onClick={() =>
            setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
          }
        >
          Buttons
        </MenuButton>
        <MenuButton>Colors</MenuButton>
        <MenuButton>Typography</MenuButton>
        <MenuButton>Typescale</MenuButton>
      </div>
    </div>
  );
};

export default MenuTab;
