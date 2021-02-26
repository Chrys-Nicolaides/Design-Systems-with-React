import React from "react";
import { darkTheme, lightTheme } from "../../systems";

const TypographyTab = (props) => {
  const { useDarkTheme, title } = props;

  return (
    <div className="typography-tab">
      <div
        className="first-background"
        style={{
          background: useDarkTheme
            ? lightTheme.primaryBackgroundFirst
            : darkTheme.primaryBackgroundFirst,
        }}
      >
        <h1>{title}</h1>
        <div className="heading-font">
          <h5>Heading Font</h5>
          <hr></hr>

          <div
            className="heading-container"
            style={{ fontFamily: darkTheme.primaryFont }}
          >
            <div
              className="heading-container-left"
              // style={{ fontFamily: darkTheme.primaryFont }}
            >
              <h2>Aa</h2>
            </div>
            <div
              className="heading-container-right"
              style={{ fontFamily: darkTheme.primaryFont }}
            >
              <p>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
              <p>0123456789 !@#$%^&*?/</p>
            </div>
            <h5>Fira Sans Condensed / Bold</h5>
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
            <h5>Subeading Font</h5>
            <hr></hr>
            <div className="subheading-container">
              <div className="subheading-container-left">
                <h2>Aa</h2>
                <h5>Source Sans Pro</h5>
              </div>
              <div className="subheading-container-right">
                <p>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
                <p>0123456789 !@#$%^&*?/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyTab;
