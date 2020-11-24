import React from "react";
import PurplePalette, {
  NeutralPalette,
  SuccessPalette,
  ErrorPalette,
  WarningPalette,
} from "../colorTiles";

const ColorsTab = () => {
  return (
    <div
      style={{
        margin: "46px 46px 66px 46px",
      }}
    >
      <h1 style={{ paddingBottom: "30px" }}>Color</h1>
      <p
        style={{
          paddingBottom: "60px",
          fontFamily: "Source Sans Pro",
          fontWeight: "300",
          width: "50%",
        }}
      >
        These are all my colors, oooooh
      </p>
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
      <h5>Neutral</h5>
      <div className="neutral-palette">
        <NeutralPalette modifiers={["greyNine"]} className="no-click" />
        <NeutralPalette modifiers={["greyEight"]} className="no-click" />
        <NeutralPalette modifiers={["greySeven"]} className="no-click" />
        <NeutralPalette modifiers={["greySix"]} className="no-click" />
        <NeutralPalette modifiers={["greyFive"]} className="no-click" />
        <NeutralPalette modifiers={["greyFour"]} className="no-click" />
        <NeutralPalette modifiers={["greyThree"]} className="no-click" />
        <NeutralPalette modifiers={["greyTwo"]} className="no-click" />
        <NeutralPalette modifiers={["greyOne"]} className="no-click" />
      </div>
      <div clasName="black-white" style={{ paddingTop: "30px" }}>
        <NeutralPalette
          style={{ backgroundColor: "black" }}
          className="no-click"
        />
        <NeutralPalette
          style={{ backgroundColor: "white" }}
          className="no-click"
        />
      </div>

      <div className="status-palettes" style={{ paddingTop: "60px" }}>
        <h5>Success</h5>

        <div className="success-palette">
          <SuccessPalette modifiers={["greenNine"]} className="no-click" />
          <SuccessPalette modifiers={["greenEight"]} className="no-click" />
          <SuccessPalette modifiers={["greenSeven"]} className="no-click" />
          <SuccessPalette modifiers={["greenSix"]} className="no-click" />
          <SuccessPalette modifiers={["greenFive"]} className="no-click" />
          <SuccessPalette modifiers={["greenFour"]} className="no-click" />
          <SuccessPalette modifiers={["greenThree"]} className="no-click" />
          <SuccessPalette modifiers={["greenTwo"]} className="no-click" />
          <SuccessPalette modifiers={["greenOne"]} className="no-click" />
        </div>
        <h5>Error</h5>

        <div className="error-palette">
          <ErrorPalette modifiers={["redNine"]} className="no-click" />
          <ErrorPalette modifiers={["redEight"]} className="no-click" />
          <ErrorPalette modifiers={["redSeven"]} className="no-click" />
          <ErrorPalette modifiers={["redSix"]} className="no-click" />
          <ErrorPalette modifiers={["redFive"]} className="no-click" />
          <ErrorPalette modifiers={["redFour"]} className="no-click" />
          <ErrorPalette modifiers={["redThree"]} className="no-click" />
          <ErrorPalette modifiers={["redTwo"]} className="no-click" />
          <ErrorPalette modifiers={["redOne"]} className="no-click" />
        </div>
        <div className="warning-palette">
          <h5>Warning</h5>

          <WarningPalette modifiers={["yellowNine"]} className="no-click" />
          <WarningPalette modifiers={["yellowEight"]} className="no-click" />
          <WarningPalette modifiers={["yellowSeven"]} className="no-click" />
          <WarningPalette modifiers={["yellowSix"]} className="no-click" />
          <WarningPalette modifiers={["yellowFive"]} className="no-click" />
          <WarningPalette modifiers={["yellowFour"]} className="no-click" />
          <WarningPalette modifiers={["yellowThree"]} className="no-click" />
          <WarningPalette modifiers={["yellowTwo"]} className="no-click" />
          <WarningPalette modifiers={["yellowOne"]} className="no-click" />
        </div>
      </div>
    </div>
  );
};

export default ColorsTab;
