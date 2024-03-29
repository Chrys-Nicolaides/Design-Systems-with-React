import React, { useState } from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";
import { darkTheme, lightTheme, typeScale } from "../../systems";

const ButtonsTab = (props) => {
  let [isExpanded, setIsExpanded] = useState({
    primary: false,
    secondary: false,
  });

  const { useDarkTheme, title } = props;

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
        <h1 className="primary-font display-bold">{title}</h1>
        <p className="secondary-font heading-light">
          Buttons are arguably a design system’s most important interactive
          component. They are clickable elements used to trigger actions that
          allow users to interact with web pages in various ways. Each button
          variant has a specific function, and their button designs and labels
          communicate that function and calls to action to users. Buttons are
          the purest expression of a Design System’s visual style as it unifies
          three fundamental attributes - color, typography and iconography. Each
          web page should include one Primary button, with any other remaining
          call to actions represented with secondary, less emphasised buttons.
          <p className="p-text secondary-font heading-light">
            Primary buttons are the principle call to action button style for
            the most important positive action on a web page and should only
            appear once per screen. Secondary buttons are used for secondary
            actions on a page, while still of importance, but won't trigger the
            highest-priority action on a page, such as navigating to other
            content on the page. They have a subtle style variation and can be
            commonly used in combination with Primary buttons. When used as part
            of a pair, a Secondary button can be used to perform the set's
            negative action, such as ‘cancel’ or ‘back’. Secondary buttons
            should not be used in isolation or used for positive actions.
            Tertiary buttons are even less prominent than Secondary buttons.
            They can be used for sub-tasks on a page, used in isolation or
            paired with Primary buttons where multiple calls to action exist.
          </p>{" "}
          <p className="p-text secondary-font heading-light">
            Disabled buttons are typically greyed out and not clickable buttons,
            often to communicate to the user that they have not completed all
            necessary steps to proceed further.
          </p>
        </p>
        <div className="all-buttons">
          <div className="clickable-buttons flex">
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
            <TertiaryButton>Tertiary Button</TertiaryButton>
          </div>

          <div className="menu-button flex">
            <MenuButton
              style={{
                color: useDarkTheme
                  ? lightTheme.lightColor
                  : darkTheme.defaultText,
              }}
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
              color: useDarkTheme
                ? lightTheme.disabledBackgroundColor
                : darkTheme.disabledBackgroundColor,
            }}
          >
            <h4
              style={{ fontSize: typeScale.h4 }}
              className="buttons-subheading flex secondary-font display-semibold"
            >
              Button States
            </h4>
            <div>
              <div className="button-labels secondary-font">
                <h6
                  className="heading-regular"
                  style={{ fontSize: typeScale.h6 }}
                >
                  Default
                </h6>
                <h6
                  className="heading-regular"
                  style={{ fontSize: typeScale.h6 }}
                >
                  Hover
                </h6>
                <h6
                  className="heading-regular"
                  style={{ fontSize: typeScale.h6 }}
                >
                  Active
                </h6>
                <h6
                  className="heading-regular"
                  style={{ fontSize: typeScale.h6 }}
                >
                  Disabled
                </h6>
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
                  style={{
                    color: useDarkTheme
                      ? lightTheme.lightColor
                      : darkTheme.defaultText,
                  }}
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
