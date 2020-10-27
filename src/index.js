import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/buttons";

const App = () => (
  <div>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Hello World</SecondaryButton>
    <TertiaryButton>Hello World</TertiaryButton>
  </div>
);

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);
