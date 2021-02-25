import React, { useState } from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";
import { darkTheme, lightTheme } from "../../systems";

const ButtonsTab = (props) => {
  let [isExpanded, setIsExpanded] = useState({
    primary: false,
    secondary: false,
  });

  const { useDarkTheme } = props;

  return (
    <div className="buttons-tab flex">
      <div
        className="first-background"
        style={{
          background: useDarkTheme
            ? lightTheme.primaryBackgroundFirst
            : darkTheme.primaryBackgroundFirst,
        }}
      >
        <h1>Buttons</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas
          turpis et sapien commodo, id viverra quam pharetra. Maecenas elit
          ligula, facilisis in odio sodales, eleifend ultricies sapien. Cras
          nisi enim, ornare at erat eget, varius consectetur erat. Curabitur
          feugiat ante sem, a tempor sapien volutpat at. Pellentesque nisl eros,
          suscipit condimentum ornare nec, eleifend ut neque. Quisque imperdiet
          vestibulum elit, at eleifend turpis eleifend vestibulum. Duis lorem
          libero, vestibulum ut feugiat nec, fermentum nec nulla. Curabitur
          faucibus magna nec erat tincidunt ornare. Proin rutrum mauris ut
          tincidunt tempus. Vestibulum vel dui ipsum. Quisque pharetra
          sollicitudin facilisis. Proin consequat lorem enim. Nullam sodales,
          leo at vestibulum porttitor, odio est consequat magna, ut ullamcorper
          nulla magna a nisl. Sed ac elit orci. Duis egestas, justo sagittis
          pharetra feugiat, mi ipsum facilisis nulla, a laoreet augue risus sed
          odio. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Maecenas leo nunc, dignissim sit amet
          consectetur eget, ullamcorper ut massa. Pellentesque arcu neque,
          tempus ultricies maximus et, maximus at tellus. Phasellus varius risus
          eget scelerisque maximus.
        </p>
        <div className="all-buttons">
          <div className="clickable-buttons flex">
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
            <TertiaryButton>Tertiary Button</TertiaryButton>
          </div>

          <div className="menu-button flex">
            <MenuButton
              onClick={() =>
                setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
              }
              modifiers={["MenuButton"]}
            >
              {isExpanded.primary ? "hide" : "show all"}
            </MenuButton>
          </div>
          {isExpanded.primary ? (
            <div>
              <div className="status-buttons">
                <PrimaryButton modifiers={["success"]}>
                  Success Button
                </PrimaryButton>
                <PrimaryButton modifiers={["warning"]}>
                  Warning Button
                </PrimaryButton>
                <PrimaryButton modifiers={["error"]}>
                  Error Button
                </PrimaryButton>
                <PrimaryButton modifiers={["disabled"]}>
                  Disabled Button
                </PrimaryButton>
              </div>
              <div className="status-buttons">
                <SecondaryButton modifiers={["SecondaryButtonSuccess"]}>
                  Secondary Button
                </SecondaryButton>
                <SecondaryButton modifiers={["SecondaryButtonWarning"]}>
                  Secondary Button
                </SecondaryButton>
                <SecondaryButton modifiers={["SecondaryButtonError"]}>
                  Secondary Button
                </SecondaryButton>
                <SecondaryButton modifiers={["SecondaryDisabled"]}>
                  Secondary Button
                </SecondaryButton>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className="second-background"
            style={{
              background: useDarkTheme
                ? lightTheme.primaryBackgroundSecond
                : darkTheme.primaryBackgroundSecond,
            }}
          >
            <h3 className="buttons-subheading flex">Button States</h3>
            <div>
              <div
                className="button-labels"
                style={{
                  color: useDarkTheme
                    ? lightTheme.disabledBackgroundColor
                    : darkTheme.disabledBackgroundColor,
                }}
              >
                <div>Default</div>
                <div>Hover</div>
                <div>Active</div>
                <div>Disabled</div>
              </div>
              <div className="buttons-visible">
                <div className="primary-buttons">
                  <PrimaryButton className="no-click">
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimaryHover"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimaryActive"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton className="no-click" modifiers={["disabled"]}>
                    Primary Button
                  </PrimaryButton>
                </div>
                <div className="secondary-buttons">
                  <SecondaryButton className="no-click">
                    Secondary Button
                  </SecondaryButton>
                  <SecondaryButton
                    className="no-click"
                    modifiers={["SecondaryHover"]}
                  >
                    Secondary Button
                  </SecondaryButton>
                  <SecondaryButton
                    className="no-click"
                    modifiers={["SecondaryActive"]}
                  >
                    Secondary Button
                  </SecondaryButton>
                  <SecondaryButton
                    className="no-click"
                    modifiers={["SecondaryDisabled"]}
                  >
                    Secondary Button
                  </SecondaryButton>
                </div>
                <div className="tertiary-buttons">
                  <TertiaryButton className="no-click">
                    Tertiary Button
                  </TertiaryButton>
                  <TertiaryButton
                    className="no-click"
                    modifiers={["TertiaryHover"]}
                  >
                    Tertiary Button
                  </TertiaryButton>
                  <TertiaryButton
                    className="no-click"
                    modifiers={["TertiaryActive"]}
                  >
                    Tertiary Button
                  </TertiaryButton>
                  <TertiaryButton
                    className="no-click"
                    modifiers={["TertiaryDisabled"]}
                  >
                    Tertiary Button
                  </TertiaryButton>
                </div>
              </div>
              <div className="status-buttons-visible">
                <div className="success-buttons">
                  <PrimaryButton className="no-click" modifiers={["success"]}>
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimarySuccessHover"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimarySuccessActive"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton className="no-click" modifiers={["disabled"]}>
                    Primary Button
                  </PrimaryButton>
                </div>
                <div className="warning-buttons">
                  <PrimaryButton className="no-click" modifiers={["warning"]}>
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimaryWarningHover"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimaryWarningActive"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton className="no-click" modifiers={["disabled"]}>
                    Primary Button
                  </PrimaryButton>
                </div>
                <div className="error-buttons">
                  <PrimaryButton className="no-click" modifiers={["error"]}>
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimaryErrorHover"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton
                    className="no-click"
                    modifiers={["PrimaryErrorActive"]}
                  >
                    Primary Button
                  </PrimaryButton>
                  <PrimaryButton className="no-click" modifiers={["disabled"]}>
                    Primary Button
                  </PrimaryButton>
                </div>
              </div>
              <div className="menu-button flex">
                <MenuButton
                  onClick={() =>
                    setIsExpanded({
                      ...isExpanded,
                      secondary: !isExpanded.secondary,
                    })
                  }
                >
                  {isExpanded.secondary ? "hide" : "show all"}
                </MenuButton>
              </div>
              {isExpanded.secondary ? (
                <div className="hidden-status-buttons">
                  <div className="secondary-success-static-buttons">
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryButtonSuccess"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondarySuccessHover"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondarySuccessActive"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryDisabled"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                  </div>
                  <div className="secondary-warning-static-buttons">
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryButtonWarning"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryWarningHover"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryWarningActive"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryDisabled"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                  </div>
                  <div className="secondary-error-static-buttons">
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryButtonError"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryErrorHover"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryErrorActive"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                    <SecondaryButton
                      className="no-click"
                      modifiers={["SecondaryDisabled"]}
                    >
                      Secondary Button
                    </SecondaryButton>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsTab;
