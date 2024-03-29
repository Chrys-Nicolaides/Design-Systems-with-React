import React, { useState } from "react";
import {
  PurplePalette,
  NeutralPalette,
  SuccessPalette,
  ErrorPalette,
  WarningPalette,
} from "../colorTiles";
import { darkTheme, lightTheme, typeScale } from "../../systems";
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
        <h6
          style={{ fontSize: typeScale.h6 }}
          className="secondary-font heading-regular"
        >
          {object.brandNumber}
        </h6>
        <h6
          className="secondary-font heading-light"
          style={{
            color: useDarkTheme
              ? lightTheme.disabledBackgroundColor
              : darkTheme.disabledBackgroundColor,
            fontSize: typeScale.helperText,
          }}
        >
          {object.brandLabel}
        </h6>
        <h6
          className="secondary-font heading-light"
          style={{
            color: useDarkTheme
              ? lightTheme.disabledBackgroundColor
              : darkTheme.disabledBackgroundColor,
            fontSize: typeScale.h6,
          }}
        >
          {object.brandHex}
        </h6>
      </div>
    );
  };

  return (
    <div className="colors-tab flex">
      <div
        className="first-background"
        style={{
          background: useDarkTheme
            ? lightTheme.primaryBackgroundFirst
            : darkTheme.primaryBackgroundFirst,
        }}
      >
        <h1 className="primary-font display-bold">{props.title}</h1>
        <p className="secondary-font heading-light">
          Understanding how colour impacts human psychology is a key deciding
          factor when selecting colour palettes for digital interfaces, hence
          being an important consideration for UX designers. The use of colour
          can have an emotional impact on users and their affect their overall
          perception of a particular design or interface.
          <p className="p-text secondary-font heading-light">
            Colour accessibility affects everyone, regardless of whether they
            have any form of colour vision deficiency or impairment.
          </p>
          <p className="p-text secondary-font heading-light">
            The colour purple was selected for this design system due as it is
            believed to evoke creativity, as well as feelings of reliability,
            loyalty and wisdom. The use of lighter shades of purple in
            particular in visual designs can help create postive atmospheres for
            users.
          </p>
        </p>
        <h3
          style={{ fontSize: typeScale.h3 }}
          className="brand-colors flex secondary-font heading-regular"
        >
          Brand Colours
        </h3>

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
        <div
          className="second-background"
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundSecond
              : darkTheme.primaryBackgroundSecond,
            color: useDarkTheme
              ? lightTheme.disabledBackgroundColor
              : darkTheme.disabledBackgroundColor,
          }}
        >
          <h4
            style={{ fontSize: typeScale.h4 }}
            className="other-colors flex secondary-font display-semibold"
          >
            Other Colours
          </h4>

          <h6
            style={{ fontSize: typeScale.h6 }}
            className="flex secondary-font heading-regular"
          >
            Neutral
          </h6>
          <div className="neutral-palette flex">
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
          <div className="black-white flex">
            <NeutralPalette
              style={{ backgroundColor: "white" }}
              className="no-click border-class-light"
            />
            <NeutralPalette
              style={{ backgroundColor: "black" }}
              className="no-click border-class-dark"
            />
          </div>
          <div className="menu-button-div flex">
            <MenuButton
              style={{
                color: useDarkTheme
                  ? lightTheme.lightColor
                  : darkTheme.defaultText,
              }}
              className="menu-button"
              onClick={() =>
                setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
              }
            >
              {isExpanded.primary ? "hide" : "show all"}
            </MenuButton>
          </div>
          {isExpanded.primary ? (
            <div className="status-palettes">
              <h6
                style={{ fontSize: typeScale.h6 }}
                className="flex secondary-font heading-regular"
              >
                Success
              </h6>

              <div className="success-palette flex">
                {greenNumbers.map((colourNumber) => {
                  return (
                    <SuccessPalette
                      modifiers={[colourNumber]}
                      className="no-click"
                    />
                  );
                })}
              </div>
              <h6
                style={{ fontSize: typeScale.h6 }}
                className="error-label flex secondary-font heading-regular"
              >
                Error
              </h6>

              <div className="error-palette flex">
                {redNumbers.map((colourNumber) => {
                  return (
                    <ErrorPalette
                      modifiers={[colourNumber]}
                      className="no-click"
                    />
                  );
                })}
              </div>
              <h6
                style={{ fontSize: typeScale.h6 }}
                className="warning-label flex secondary-font heading-regular"
              >
                Warning
              </h6>
              <div className="warning-palette flex">
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
