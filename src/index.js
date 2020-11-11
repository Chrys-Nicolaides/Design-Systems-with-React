import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/buttons";
import { GlobalStyle, darkTheme, lightTheme } from "./systems";

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(false);
  return (
    <div>
      <div style={{ fontFamily: "Fira Sans Condensed" }}>
        <h1>Design Systems</h1>
      </div>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme} className="themeToggle">
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
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
        <h1 style={{ paddingTop: "30px" }}>Buttons</h1>
        <p>Buttons are used to trigger actions within an application.
        Buttons are used to trigger internal actions within your web applications.
        Primary buttons are used as a call to action and indicate the most important action on a page. Secondary buttons are somethingdfighdsjfkjgvdkflijgvdfl

        Tertiary buttons are vcjikdfjgvidkfjvdfikl

        Buttons are used to trigger actions within an application.
        Buttons are used to trigger internal actions within your web applications.
 Primary buttons are used as a call to action and indicate the most important action on a page. Secondary buttons are </p>
        <h3 style={{ paddingTop: "40px" }}>Button States</h3>
        <div
          style={{
            background: useDarkTheme
              ? lightTheme.primaryColor
              : darkTheme.primaryColor,
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            position: "fixed",
            zIndex: -1,
          }}
        ></div>
        <div style={{
          margin: "0 4px 24px", padding: "8px", paddingTop: "20px"
        }}>
          <PrimaryButton style={{
            margin: "0 16px 24px"
          }}>Primary Button</PrimaryButton>
          <SecondaryButton> Secondary Button</SecondaryButton>
          <TertiaryButton>Tertiary Button</TertiaryButton>
          <div style={{
            margin: "0 4px 24px", paddingTop: "20px"
          }}>
            <PrimaryButton style={{
              margin: "0 16px 24px"
            }} modifiers={['success', 'large']}>Primary Button</PrimaryButton>
            <PrimaryButton style={{
              margin: "0 16px 24px"
            }} modifiers={['warning', 'large']}>Primary Button</PrimaryButton>
            <PrimaryButton style={{
              margin: "0 16px 24px"
            }} modifiers={['error', 'large']}>Primary Button</PrimaryButton>
            <PrimaryButton style={{
              margin: "0 16px 24px"
            }} modifiers={['disabled', 'large']}>Primary Button</PrimaryButton>
          </div>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);

