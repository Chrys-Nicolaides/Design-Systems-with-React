import React from "react";
import PurplePalette from "../colorTiles";

const ColorsTab = () => {
  return (
    <div>
      <h3>Color</h3>
      <p>These are all my colors, oooooh</p>
      <h5>Brand</h5>
      <div className="purple-palette">
        <PurplePalette modifiers={["purpleNine"]} className="no-click" />
        <PurplePalette modifiers={["purpleEight"]} className="no-click" />
        <PurplePalette modifiers={["purpleSeven"]} className="no-click" />
        <PurplePalette modifiers={["purpleSix"]} className="no-click" />
        <PurplePalette modifiers={["purpleFive"]} className="no-click" />
        <PurplePalette modifiers={["purpleFour"]} className="no-click" />
        <PurplePalette modifiers={["purpleThree"]} className="no-click" />
        <PurplePalette modifiers={["purpleTwo"]} className="no-click" />
        <PurplePalette modifiers={["purpleOne"]} className="no-click" />
      </div>
    </div>
  );
};

export default ColorsTab;
