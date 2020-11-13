import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/buttons";
import { GlobalStyle, darkTheme, lightTheme } from "./systems";
import ButtonsTab from "./components/tabs/buttonTab";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  return (
    <div style={{
      background: useDarkTheme
        ? lightTheme.primaryBackgroundColor
        : darkTheme.primaryBackgroundColor,
      color: useDarkTheme
        ? lightTheme.textColorInverted
        : darkTheme.defaultText,
      width: "100%",
      height: "100%",
      fontFamily: "Fira Sans Condensed"
    }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h1 style={{ margin: "46px 0 0 46px", fontSize: '96px' }}>Design Systems</h1>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button
            style={{
              margin: "0 46px 0 0", padding: "8px", background: "none", borderRadius: "50px",
              color: useDarkTheme
                ? lightTheme.textColor
                : darkTheme.defaultText
            }}
            onClick={() => {
              setUseDarkTheme(!useDarkTheme)
            }}
          >{useDarkTheme ? "dark mode" : "light mode"}
          </button>
        </div>

      </div>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme} className="themeToggle" style={{
        color: useDarkTheme
          ? lightTheme.textColor
          : darkTheme.textColor
      }}>
        <div
          style={{
            background: useDarkTheme
              ? lightTheme.primaryBackgroundColor
              : darkTheme.primaryBackgroundColor,
            color: useDarkTheme
              ? lightTheme.textColorInverted
              : darkTheme.defaultText,
          }}
        >
          <div style={{
            marginLeft: "46px", paddingTop: '60px'
          }}>
            <h1>Buttons</h1>
            {/* <p style={{ fontFamily: 'Source Sans Pro', fontWeight: '300', width: '50%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas turpis et sapien commodo, id viverra quam pharetra. Maecenas elit ligula, facilisis in odio sodales, eleifend ultricies sapien. Cras nisi enim, ornare at erat eget, varius consectetur erat. Curabitur feugiat ante sem, a tempor sapien volutpat at. Pellentesque nisl eros, suscipit condimentum ornare nec, eleifend ut neque. Quisque imperdiet vestibulum elit, at eleifend turpis eleifend vestibulum. Duis lorem libero, vestibulum ut feugiat nec, fermentum nec nulla. Curabitur faucibus magna nec erat tincidunt ornare. Proin rutrum mauris ut tincidunt tempus. Vestibulum vel dui ipsum. Quisque pharetra sollicitudin facilisis.

Proin consequat lorem enim. Nullam sodales, leo at vestibulum porttitor, odio est consequat magna, ut ullamcorper nulla magna a nisl. Sed ac elit orci. Duis egestas, justo sagittis pharetra feugiat, mi ipsum facilisis nulla, a laoreet augue risus sed odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas leo nunc, dignissim sit amet consectetur eget, ullamcorper ut massa. Pellentesque arcu neque, tempus ultricies maximus et, maximus at tellus. Phasellus varius risus eget scelerisque maximus.</p>
            <h3>Button States</h3> */}
          </div>
          <ButtonsTab />
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

