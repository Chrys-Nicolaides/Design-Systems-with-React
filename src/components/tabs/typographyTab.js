import React from "react";
import { darkTheme, lightTheme } from "../../systems";

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
          <h5>Heading Font</h5>
          <hr></hr>
          <div
            className="heading-container"
            style={{ fontFamily: darkTheme.primaryFont }}
          >
            <div className="heading-container-left">
              <h2>Aa</h2>
            </div>
            <div className="heading-container-right">
              <p style={{ fontFamily: darkTheme.primaryFont }}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
              <p style={{ fontFamily: darkTheme.primaryFont }}>
                0123456789 !@#$%^&*?/
              </p>
            </div>
            <h5 style={{ fontFamily: darkTheme.primaryFont }}>
              Fira Sans Condensed / Bold
            </h5>
          </div>
        </div>
        <div
          className="second-background"
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundSecond
              : darkTheme.primaryBackgroundSecond,
            fontFamily: darkTheme.secondaryFont,
          }}
        >
          <div className="subheading-font">
            <h5>Subheading Font</h5>
            <hr></hr>
            <div
              className="subheading-container"
              // style={{ fontFamily: darkTheme.secondaryFont }}
            >
              <div className="subheading-container-left">
                <h2>Aa</h2>
              </div>
              <div className="subheading-container-right">
                <p>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
                <p>0123456789 !@#$%^&*?/</p>
              </div>
              <h5>Source Sans Pro / Bold</h5>
            </div>
          </div>
          {/* <div className="subheading-font">
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
                  Vv Ww Xx Yy Zz`
                </p>
                <p>0123456789 !@#$%^&*?/</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TypographyTab;
