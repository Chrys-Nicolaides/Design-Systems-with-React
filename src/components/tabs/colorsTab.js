import React from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";

const ColorsTab = () => {
  return (
    <div>
      <h3>Color</h3>
      <p>These are all my colors</p>
      <MenuButton to="/typography">Typography</MenuButton>
    </div>
  );
};

export default ColorsTab;
