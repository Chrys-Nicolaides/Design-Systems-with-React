import React, { useState } from "react";
import PurplePalette, {
  NeutralPalette,
  SuccessPalette,
  ErrorPalette,
  WarningPalette,
} from "../colorTiles";

import { MenuButton } from "../buttons";

const ColorsTab = (props) => {
  let [isExpanded, setIsExpanded] = useState({
    primary: false,
    secondary: false,
  });
  console.log(isExpanded);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="first-background"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #37374E, #222534)",
          width: "100%",
          margin: "200px",
          borderRadius: "40px",
          zIndex: "1",
        }}
      >
        <h1
          style={{
            paddingBottom: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Color
        </h1>
        <p
          style={{
            paddingBottom: "60px",
            fontFamily: "Source Sans Pro",
            fontWeight: "300",
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          These are all my colors, oooooh
        </p>
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Brand Colors
        </h5>

        <div
          className="purple-palette"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PurplePalette modifiers={["purpleOne"]} className="no-click" />
          <PurplePalette modifiers={["purpleTwo"]} className="no-click" />
          <PurplePalette modifiers={["purpleThree"]} className="no-click" />
          <PurplePalette modifiers={["purpleFour"]} className="no-click" />
          <PurplePalette modifiers={["purpleFive"]} className="no-click" />
          <PurplePalette modifiers={["purpleSix"]} className="no-click" />
          <PurplePalette modifiers={["purpleSeven"]} className="no-click" />
          <PurplePalette modifiers={["purpleEight"]} className="no-click" />
          <PurplePalette modifiers={["purpleNine"]} className="no-click" />{" "}
        </div>
        <div
          classame="color-details"
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <h5>01</h5>
          <h3>purple-100</h3>
          <h3>#44ng99</h3>
        </div>
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Other Colors
        </h5>
        <div
          className="second-background"
          style={{
            backgroundColor: "#1B202C",
            marginLeft: "210px",
            marginRight: "210px",
            borderRadius: "40px",
            marginBottom: "100px",
          }}
        >
          <h5
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Neutral
          </h5>
          <div
            className="neutral-palette"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <NeutralPalette modifiers={["greyOne"]} className="no-click" />
            <NeutralPalette modifiers={["greyTwo"]} className="no-click" />
            <NeutralPalette modifiers={["greyThree"]} className="no-click" />
            <NeutralPalette modifiers={["greyFour"]} className="no-click" />
            <NeutralPalette modifiers={["greyFive"]} className="no-click" />
            <NeutralPalette modifiers={["greySix"]} className="no-click" />
            <NeutralPalette modifiers={["greySeven"]} className="no-click" />
            <NeutralPalette modifiers={["greyEight"]} className="no-click" />
            <NeutralPalette
              modifiers={["greyNine"]}
              className="no-click"
              style={{ border: "2px solid #2D3748" }}
            />
          </div>
          <div
            className="black-white"
            style={{
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NeutralPalette
              style={{ backgroundColor: "black" }}
              className="no-click"
            />
            <NeutralPalette
              style={{ backgroundColor: "white" }}
              className="no-click"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MenuButton
              style={{ padding: "12px 24px", marginTop: "40px" }}
              onClick={() =>
                setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
              }
            >
              show all
            </MenuButton>
          </div>
          {isExpanded.primary ? (
            <div className="status-palettes" style={{ paddingTop: "60px" }}>
              <h5 style={{ display: "flex", justifyContent: "center" }}>
                Success
              </h5>

              <div
                className="success-palette"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <SuccessPalette modifiers={["greenOne"]} className="no-click" />
                <SuccessPalette modifiers={["greenTwo"]} className="no-click" />
                <SuccessPalette
                  modifiers={["greenThree"]}
                  className="no-click"
                />
                <SuccessPalette
                  modifiers={["greenFour"]}
                  className="no-click"
                />
                <SuccessPalette
                  modifiers={["greenFive"]}
                  className="no-click"
                />
                <SuccessPalette modifiers={["greenSix"]} className="no-click" />
                <SuccessPalette
                  modifiers={["greenSeven"]}
                  className="no-click"
                />
                <SuccessPalette
                  modifiers={["greenEight"]}
                  className="no-click"
                />
                <SuccessPalette
                  modifiers={["greenNine"]}
                  className="no-click"
                />
              </div>
              <h5 style={{ display: "flex", justifyContent: "center" }}>
                Error
              </h5>

              <div
                className="error-palette"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ErrorPalette modifiers={["redOne"]} className="no-click" />
                <ErrorPalette modifiers={["redTwo"]} className="no-click" />
                <ErrorPalette modifiers={["redThree"]} className="no-click" />
                <ErrorPalette modifiers={["redFour"]} className="no-click" />
                <ErrorPalette modifiers={["redFive"]} className="no-click" />
                <ErrorPalette modifiers={["redSix"]} className="no-click" />
                <ErrorPalette modifiers={["redSeven"]} className="no-click" />
                <ErrorPalette modifiers={["redEight"]} className="no-click" />
                <ErrorPalette modifiers={["redNine"]} className="no-click" />
              </div>
              <h5 style={{ display: "flex", justifyContent: "center" }}>
                Warning
              </h5>
              <div
                className="warning-palette"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <WarningPalette
                  modifiers={["yellowOne"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowTwo"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowThree"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowFour"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowFive"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowSix"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowSeven"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowEight"]}
                  className="no-click"
                />
                <WarningPalette
                  modifiers={["yellowNine"]}
                  className="no-click"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorsTab;
