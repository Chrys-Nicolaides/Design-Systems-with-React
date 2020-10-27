import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/buttons";
import { GlobalStyle } from "./systems";

const App = () => {
  return (
    <div>
      <h1>Design Systems</h1>
      <h2>Buttons</h2>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.querySelector("#root"));
