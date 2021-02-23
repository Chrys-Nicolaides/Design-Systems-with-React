import React, { useState } from "react";
import {
  PurplePalette,
  NeutralPalette,
  SuccessPalette,
  ErrorPalette,
  WarningPalette,
} from "../colorTiles";
import { darkTheme, lightTheme } from "../../systems";
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

  const brandColourDetails = [
    {
      brandNumber: "01",
      brandLabel: "purple-100",
      brandHex: "#FAF5FF",
    },
    {
      brandNumber: "02",
      brandLabel: "purple-200",
      brandHex: "#E9D8FD",
    },
    {
      brandNumber: "03",
      brandLabel: "purple-300",
      brandHex: "#D6BCFA",
    },
    {
      brandNumber: "04",
      brandLabel: "purple-400",
      brandHex: "#B794F4",
    },
    {
      brandNumber: "05",
      brandLabel: "purple-500",
      brandHex: "#9F7AEA",
    },
    {
      brandNumber: "06",
      brandLabel: "purple-600",
      brandHex: "#805AD5",
    },
    {
      brandNumber: "07",
      brandLabel: "purple-700",
      brandHex: "#6B46C1",
    },
    {
      brandNumber: "08",
      brandLabel: "purple-800",
      brandHex: "#553C9A",
    },
    {
      brandNumber: "09",
      brandLabel: "purple-900",
      brandHex: "#44337A",
    },
  ];

  const brandList = (object) => {
    return (
      <div className="brand-details">
        <h5>{object.brandNumber}</h5>
        <h6>{object.brandLabel}</h6>
        <h6>{object.brandHex}</h6>
      </div>
    );
  };

  return (
    <div className="colors-tab">
      <div
        className="first-background"
        style={{
          background: useDarkTheme
            ? lightTheme.primaryBackgroundFirst
            : darkTheme.primaryBackgroundFirst,
        }}
      >
        <h1>Colors</h1>
        <p>
          These are all my colors. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam egestas turpis et sapien commodo, id viverra quam
          pharetra. Maecenas elit ligula, facilisis in odio sodales, eleifend
          ultricies sapien. Cras nisi enim, ornare at erat eget, varius
          consectetur erat. Curabitur feugiat ante sem, a tempor sapien volutpat
          at.
        </p>
        <h5>Brand Colors</h5>

        <div className="purple-palette">
          {purpleNumbers.map((colourNumber, index) => {
            let className = "no-click";

            if (
              useDarkTheme === false &&
              (index === 0 || index === 1 || index === 2)
            ) {
              className += " border-class-purple";
            } else if (useDarkTheme === true && (index === 7 || index === 8)) {
              className += " border-class-purple-dark";
            }

            return (
              <PurplePalette modifiers={colourNumber} className={className} />
            );
          })}
        </div>
        <div className="color-details">
          {brandColourDetails.map((item) => brandList(item))}
        </div>
        <h5 className="other-colors">Other Colors</h5>
        <div
          className="second-background"
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundSecond
              : darkTheme.primaryBackgroundSecond,
          }}
        >
          <h5>Neutral</h5>
          <div className="neutral-palette">
            {greyNumbers.map((colourNumber, index) => {
              let className = "no-click";

              if (index === 8) {
                className += " border-class-dark";
              }

              if (
                useDarkTheme === false &&
                (index === 0 || index === 1 || index === 2)
              ) {
                className += " border-class-light";
              }

              return (
                <NeutralPalette
                  modifiers={colourNumber}
                  className={className}
                />
              );
            })}
          </div>
          <div className="black-white">
            <NeutralPalette
              style={{ backgroundColor: "white" }}
              className="no-click border-class-light"
            />
            <NeutralPalette
              style={{ backgroundColor: "black" }}
              className="no-click border-class-dark"
            />
          </div>
          <div className="menu-button-div">
            <MenuButton
              className="menu-button"
              onClick={() =>
                setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
              }
            >
              show all
            </MenuButton>
          </div>
          {isExpanded.primary ? (
            <div className="status-palettes">
              <h5>Success</h5>

              <div className="success-palette">
                {greenNumbers.map((colourNumber) => {
                  return (
                    <SuccessPalette
                      modifiers={[colourNumber]}
                      className="no-click"
                    />
                  );
                })}
              </div>
              <h5 className="error-label">Error</h5>

              <div className="error-palette">
                {redNumbers.map((colourNumber) => {
                  return (
                    <ErrorPalette
                      modifiers={[colourNumber]}
                      className="no-click"
                    />
                  );
                })}
              </div>
              <h5 className="warning-label">Warning</h5>
              <div className="warning-palette">
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
