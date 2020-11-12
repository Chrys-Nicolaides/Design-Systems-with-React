import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/buttons";
import { GlobalStyle, darkTheme, lightTheme } from "./systems";

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(true);
  return (
    <div style={{
      background: useDarkTheme
        ? lightTheme.primaryBackgroundColor
        : darkTheme.primaryBackgroundColor,
      color: useDarkTheme
        ? lightTheme.textColorInverted
        : darkTheme.defaultText,
      width: "100vw",
      height: "100vh",
      fontFamily: "Fira Sans Condensed"
    }}>
      <h1>Design Systems</h1>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme} className="themeToggle" style={{
        color: useDarkTheme
          ? lightTheme.textColor
          : darkTheme.textColor
      }}>
        <button
          style={{
            margin: "0 16px 24px", padding: "8px", background: "none", color: useDarkTheme
              ? lightTheme.textColorInverted
              : darkTheme.textColor
          }}
          onClick={() => setDarkTheme(true)}
        >
          Dark theme
      </button>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setDarkTheme(false)}
        >
          Light theme
      </button>
        <div
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundColor
              : darkTheme.primaryBackgroundColor,
            color: useDarkTheme
              ? lightTheme.textColorInverted
              : darkTheme.defaultText,

            // top: 0,
            // left: 0,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-around",
            // position: "fixed",
            // zIndex: -1,
          }}
        >
          <div>
            <h1>Buttons</h1>
            <p>Buttons are used to trigger actions within an application.
            Buttons are used to trigger internal actions within your web applications.
            Primary buttons are used as a call to action and indicate the most important action on a page. Secondary buttons are somethingdfighdsjfkjgvdkflijgvdfl

            Tertiary buttons are vcjikdfjgvidkfjvdfikl

            Buttons are used to trigger actions within an application.
            Buttons are used to trigger internal actions within your web applications.
        Primary buttons are used as a call to action and indicate the most important action on a page. Secondary buttons are </p>
            <h3>Button States</h3>
          </div>
          <div style={{ margin: "0 16px 24px", paddingTop: "40px", display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
            }}>
              <PrimaryButton style={{
                margin: "0 16px 24px"
              }}>Primary Button</PrimaryButton>
              <PrimaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['success']}>Primary Button</PrimaryButton>
              <PrimaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['warning']}>Primary Button</PrimaryButton>
              <PrimaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['error']}>Primary Button</PrimaryButton>
              <PrimaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['disabled']}>Primary Button</PrimaryButton>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <SecondaryButton style={{
                margin: "0 16px 24px"
              }}> Secondary Button</SecondaryButton>
              < SecondaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['success']}>Secondary Button</SecondaryButton>
              <SecondaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['warning']}> Secondary Button</SecondaryButton>
              <SecondaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['error']}> Secondary Button</SecondaryButton>
              <SecondaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['disabled']}> Secondary Button</SecondaryButton>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-end'
            }}>
              <TertiaryButton style={{
                margin: "0 16px 24px"
              }}>Tertiary Button</TertiaryButton>
              <TertiaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['success']}>Tertiary Button</TertiaryButton>
              <TertiaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['warning']}>Tertiary Button</TertiaryButton>
              <TertiaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['error']}>Tertiary Button</TertiaryButton>
              <TertiaryButton style={{
                margin: "0 16px 24px"
              }} modifiers={['disabled']}>Tertiary Button</TertiaryButton>
            </div>
          </div>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </div >
  );
};

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);

