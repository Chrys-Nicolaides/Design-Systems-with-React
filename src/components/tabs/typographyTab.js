import React from "react";
import { darkTheme, lightTheme, typeScale } from "../../systems";

const TypographyTab = (props) => {
  const { useDarkTheme, title } = props;

  return (
    <div className="typography-tab flex">
      <div
        className="first-background"
        style={{
          background: useDarkTheme
            ? lightTheme.primaryBackgroundFirst
            : darkTheme.primaryBackgroundFirst,
        }}
      >
        <h1 className="primary-font display-bold">{title}</h1>
        <div className="heading-font">
          <h3
            style={{ fontSize: typeScale.h3 }}
            className="underlined-heading secondary-font heading-regular"
          >
            Display Font
          </h3>
          <div className="display-container">
            <div className="display-container-left">
              <h2 className="primary-font display-bold">Aa</h2>
            </div>
            <div className="display-container-right">
              <p className="alphabet primary-font display-bold">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
              <p className="symbols primary-font display-bold">
                0123456789 !@#$%^&*?/
              </p>
            </div>
            <h2
              style={{ fontSize: typeScale.h2 }}
              className="font-title primary-font display-bold"
            >
              Fira Sans Condensed / Bold
            </h2>
          </div>
        </div>
        <div className="heading-font">
          <h3
            style={{ fontSize: typeScale.h3 }}
            className="underlined-heading secondary-font heading-regular"
          >
            Heading Font
          </h3>

          <div className="heading-container">
            <div className="heading-container-left">
              <h2 className="primary-font display-semibold">Aa</h2>
            </div>
            <div className="heading-container-right">
              <p className="alphabet primary-font display-semibold">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
              <p className="symbols primary-font display-semibold">
                0123456789 !@#$%^&*?/
              </p>
            </div>
            <h2
              style={{ fontSize: typeScale.h2 }}
              className="font-title primary-font display-semibold"
            >
              Fira Sans Condensed / Semibold
            </h2>
          </div>
        </div>
        <div
          className="second-background"
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundSecond
              : darkTheme.primaryBackgroundSecond,
          }}
        >
          <div className="subheading-font">
            <h3
              style={{ fontSize: typeScale.h3 }}
              className="underlined-heading secondary-font heading-regular"
            >
              Subheading Font
            </h3>
            <div className="subheading-container">
              <div className="subheading-container-left">
                <h2 className="secondary-font heading-regular">Aa</h2>
              </div>
              <div className="subheading-container-right">
                <p className="alphabet secondary-font heading-regular">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
                <p className="symbols secondary-font heading-regular">
                  0123456789 !@#$%^&*?/
                </p>
              </div>
              <h2
                style={{ fontSize: typeScale.h2 }}
                className="font-title secondary-font heading-regular"
              >
                Source Sans Pro / Regular
              </h2>
            </div>
          </div>
          <div className="body-font">
            <h3
              style={{ fontSize: typeScale.h3 }}
              className="underlined-heading secondary-font heading-regular"
            >
              Body Font
            </h3>
            <div className="body-container">
              <div className="body-container-left">
                <h2 className="secondary-font heading-light">Aa</h2>
              </div>
              <div className="body-container-right">
                <p className="alphabet secondary-font heading-light">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
                <p className="symbols secondary-font heading-light">
                  0123456789 !@#$%^&*?/
                </p>
              </div>
              <h2
                style={{ fontSize: typeScale.h2 }}
                className="font-title secondary-font heading-light"
              >
                Source Sans Pro / Light
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyTab;
