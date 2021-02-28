import React from "react";
import { typeScale } from "../../systems";
import { darkTheme, lightTheme } from "../../systems";

const TypescaleTab = (props) => {
  const { useDarkTheme, title } = props;

  return (
    <div>
      <div
        className="first-background flex-column"
        style={{
          background: useDarkTheme
            ? lightTheme.primaryBackgroundFirst
            : darkTheme.primaryBackgroundFirst,
        }}
      >
        <h1 className="primary-font display-bold">{title}</h1>

        <div className="typescale-display display-bold primary-font">
          <h3
            style={{ fontSize: typeScale.h3 }}
            className="underlined-heading font-label secondary-font heading-regular"
          >
            Fira Sans Condensed
          </h3>
          <h1 style={{ fontSize: typeScale.display1 }}>
            Display 1 - 96px - bold
          </h1>
          <h2 style={{ fontSize: typeScale.display2 }}>
            Display 2 - 72px - bold
          </h2>
          <h3 style={{ fontSize: typeScale.display3 }}>
            Display 3 - 64px - bold
          </h3>
          <h4
            className="display-semibold"
            style={{ fontSize: typeScale.display4 }}
          >
            Display 4 - 48px - semibold
          </h4>
          <h5
            className="display-semibold"
            style={{ fontSize: typeScale.display5 }}
          >
            Display 5 - 36px - semibold
          </h5>
        </div>
        <div
          className="second-background"
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundSecond
              : darkTheme.primaryBackgroundSecond,
          }}
        >
          <div className="typescale-heading heading-regular secondary-font">
            <h3
              style={{ fontSize: typeScale.h3 }}
              className="underlined-heading secondary-font heading-regular"
            >
              Source Sans Pro
            </h3>
            <h1 style={{ fontSize: typeScale.h1 }}>H1 - 32px - regular</h1>
            <h2 style={{ fontSize: typeScale.h2 }}>H2 - 24px - regular</h2>
            <h3 style={{ fontSize: typeScale.h3 }}>H3 - 22px - regular</h3>
            <h4 style={{ fontSize: typeScale.h4 }}>H4 - 20px - regular</h4>
            <h5 style={{ fontSize: typeScale.h5 }}>H5 - 18px - regular</h5>
            <h6 style={{ fontSize: typeScale.h6 }}>H6 - 16px - regular</h6>
            <p
              className="heading-paragraph heading-light"
              style={{ fontSize: typeScale.paragraph }}
            >
              Paragraph - 16px - light
            </p>
            <p
              className="heading-light"
              style={{ fontSize: typeScale.helperText }}
            >
              Helper Text - 14px - light
            </p>
            <p
              className="heading-copyright heading-light"
              style={{ fontSize: typeScale.copyrightText }}
            >
              Copyright Text - 12px - light
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypescaleTab;
