import React, { useState } from "react";
import {
  PurplePalette,
  NeutralPalette,
  SuccessPalette,
  ErrorPalette,
  WarningPalette,
} from "../colorTiles";
import { darkTheme, lightTheme } from "../../systems";
import { ThemeProvider } from "styled-components";
import { MenuButton } from "../buttons";

const ColorsTab = (props) => {
  let [isExpanded, setIsExpanded] = useState({
    primary: false,
    secondary: false,
  });

  const { useDarkTheme } = props;

  const colourList = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  const purpleNumbers = colourList.map((colourNumber) => {
    return `purple${colourNumber}`;
  });
  const greyNumbers = colourList.map((colourNumber) => {
    return `grey${colourNumber}`;
  });
  const greenNumbers = colourList.map((colourNumber) => {
    return `green${colourNumber}`;
  });
  const redNumbers = colourList.map((colourNumber) => {
    return `red${colourNumber}`;
  });
  const yellowNumbers = colourList.map((colourNumber) => {
    return `yellow${colourNumber}`;
  });

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
          background: useDarkTheme
            ? lightTheme.primaryBackgroundFirst
            : darkTheme.primaryBackgroundFirst,
          marginBottom: "100px",
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
          Colors
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
          {purpleNumbers.map((colourNumber) => {
            return (
              <PurplePalette modifiers={colourNumber} className="no-click" />
            );
          })}
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
            // backgroundColor: "#1B202C",
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
            {greyNumbers.map((colourNumber, index) => {
              let className = "no-click";

              if (index === 8) {
                className += " margin-class";
              }

              return (
                <NeutralPalette
                  modifiers={[colourNumber]}
                  className={className}
                />
              );
            })}
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
              style={{ backgroundColor: "black", border: "2px solid #2D3748" }}
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
                {greenNumbers.map((colourNumber) => {
                  return (
                    <SuccessPalette
                      modifiers={[colourNumber]}
                      className="no-click"
                    />
                  );
                })}
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
                {redNumbers.map((colourNumber) => {
                  return (
                    <ErrorPalette
                      modifiers={[colourNumber]}
                      className="no-click"
                    />
                  );
                })}
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
                {yellowNumbers.map((colourNumber) => {
                  return (
                    <WarningPalette
                      modifiers={[colourNumber]}
                      className="no-click"
                    />
                  );
                })}
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
