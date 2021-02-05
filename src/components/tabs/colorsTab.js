import React, { useState } from "react";
import PurplePalette, {
  NeutralPalette,
  SuccessPalette,
  ErrorPalette,
  WarningPalette,
} from "../colorTiles";

import { MenuButton } from "../buttons";

import StyledGradientDiv from "../themeColor";

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
          marginBottom: "120px",
          marginLeft: "120px",
          marginRight: "120px",
          borderRadius: "40px",
          zIndex: "1",
        }}
      >
        <h1
          style={{
            paddingBottom: "30px",
            margin: "80px 0 0 0",
            fontSize: "96px",
            marginLeft: "180px",
            textAlign: "left",
          }}
        >
          Color
        </h1>

        <p
          style={{
            paddingBottom: "100px",
            fontFamily: "Source Sans Pro",
            fontWeight: "300",
            display: "flex",
            justifyContent: "center",
            marginLeft: "180px",
            marginRight: "180px",
          }}
        >
          These are all my colors. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam egestas turpis et sapien commodo, id viverra quam
          pharetra. Maecenas elit ligula, facilisis in odio sodales, eleifend
          ultricies sapien. Cras nisi enim, ornare at erat eget, varius
          consectetur erat. Curabitur feugiat ante sem, a tempor sapien volutpat
          at.
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
            marginLeft: "180px",
            marginRight: "180px",
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
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "180px",
            marginRight: "180px",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              01
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-100
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #FAF5FF
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              02
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-200
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #E9D8FD
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              03
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-300
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #D6BCFA
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              04
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-400
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #B794F4
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              05
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-500
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #9F7AEA
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              06
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-600
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #805AD5
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              07
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-700
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #6B46C1
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              08
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-800
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #553C9A
            </h6>
          </div>
          <div>
            <h5
              style={{
                marginTop: "18px",
                marginBottom: "10px",
              }}
            >
              09
            </h5>
            <h6
              style={{
                margin: 0,
              }}
            >
              purple-900
            </h6>
            <h6
              style={{
                marginTop: 6,
              }}
            >
              #44337A
            </h6>
          </div>
        </div>
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "95px",
            marginBottom: "35px",
          }}
        >
          Other Colors
        </h5>
        <div
          className="second-background"
          style={{
            backgroundColor: "#1B202C",
            marginLeft: "180px",
            marginRight: "180px",
            borderRadius: "40px",
            marginTop: "40px",
            marginBottom: "100px",
            paddingTop: "60px",
          }}
        >
          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0",
              marginBottom: "45px",
            }}
          >
            Neutral
          </h5>
          <div
            className="neutral-palette"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0",
            }}
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
              style={{
                padding: "12px 24px",
                marginTop: "80px",
                marginBottom: "40px",
              }}
              onClick={() =>
                setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
              }
            >
              show all
            </MenuButton>
          </div>
          {isExpanded.primary ? (
            <div className="status-palettes" style={{ paddingTop: "40px" }}>
              <h5 style={{ display: "flex", justifyContent: "center" }}>
                Success
              </h5>

              <div
                className="success-palette"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "45px",
                }}
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
              <h5
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "45px",
                }}
              >
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
              <h5
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "45px",
                }}
              >
                Warning
              </h5>
              <div
                className="warning-palette"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "100px",
                }}
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
