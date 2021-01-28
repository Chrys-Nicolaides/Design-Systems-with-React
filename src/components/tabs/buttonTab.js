import React, { useState } from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
  MenuButton,
} from "../buttons";

const ButtonsTab = (props) => {
  let [isExpanded, setIsExpanded] = useState({
    primary: false,
    secondary: false,
  });
  console.log(isExpanded);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ paddingBottom: "30px" }}>Buttons</h1>
        <p
          style={{
            fontFamily: "Source Sans Pro",
            fontWeight: "300",
            width: "50%",
          }}
        >
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
      </div>
      <div
        className="all-buttons"
        style={{
          margin: "0 16px 0 46px",
          paddingTop: "80px",
          display: "grid",
          gridTemplatecolumns: "column",
        }}
      >
        <div className="clickable-buttons">
          <PrimaryButton
            style={{
              marginRight: "40px",
            }}
          >
            Primary Button
          </PrimaryButton>
          <SecondaryButton
            style={{
              marginRight: "40px",
            }}
          >
            Secondary Button
          </SecondaryButton>
          <TertiaryButton>Tertiary Button</TertiaryButton>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MenuButton
            onClick={() =>
              setIsExpanded({ ...isExpanded, primary: !isExpanded.primary })
            }
            modifiers={["MenuButton"]}
            style={{ padding: "12px 24px", marginTop: "40px" }}
          >
            show all
          </MenuButton>
        </div>
        {isExpanded.primary ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "40px",
              }}
            >
              <PrimaryButton modifiers={["success"]}>
                Primary Button
              </PrimaryButton>
              <PrimaryButton modifiers={["warning"]}>
                Primary Button
              </PrimaryButton>
              <PrimaryButton modifiers={["error"]}>
                Primary Button
              </PrimaryButton>
              <PrimaryButton modifiers={["disabled"]}>
                Primary Button
              </PrimaryButton>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        <h3 style={{ paddingTop: "80px" }}>Button States</h3>
        <div style={{ textAlign: "center" }} className="static-buttons">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: "40px",
              paddingTop: "40px",
            }}
          >
            <div>Default</div>
            <div>Hover</div>
            <div>Active</div>
            <div>Disabled</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // padding: "0 300px 0 300px",
              marginBottom: "40px",
            }}
          >
            <PrimaryButton className="no-click">Primary Button</PrimaryButton>
            <PrimaryButton className="no-click" modifiers={["PrimaryHover"]}>
              Primary Button
            </PrimaryButton>
            <PrimaryButton className="no-click" modifiers={["PrimaryActive"]}>
              Primary Button
            </PrimaryButton>
            <PrimaryButton className="no-click" modifiers={["disabled"]}>
              Primary Button
            </PrimaryButton>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // margin: "0 30px 0 30px",
              marginBottom: "40px",
            }}
          >
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

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // padding: "0 300px 0 300px",
              marginBottom: "200px",
            }}
          >
            <TertiaryButton className="no-click">
              Tertiary Button
            </TertiaryButton>
            <TertiaryButton className="no-click" modifiers={["TertiaryHover"]}>
              Tertiary Button
            </TertiaryButton>
            <TertiaryButton className="no-click" modifiers={["TertiaryActive"]}>
              Tertiary Button
            </TertiaryButton>
            <TertiaryButton
              className="no-click"
              modifiers={["TertiaryDisabled"]}
            >
              Tertiary Button
            </TertiaryButton>
          </div>
          <div></div>
        </div>

        <div
          className="success-buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // padding: "0 300px 0 300px",
            marginBottom: "40px",
          }}
        >
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
        <div
          className="warning-buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // padding: "0 300px 0 300px",
            marginBottom: "40px",
          }}
        >
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
        <div
          className="error-buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // padding: "0 300px 0 300px",
            marginBottom: "40px",
          }}
        >
          <PrimaryButton className="no-click" modifiers={["error"]}>
            Primary Button
          </PrimaryButton>
          <PrimaryButton className="no-click" modifiers={["PrimaryErrorHover"]}>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MenuButton
            style={{ padding: "12px 24px", marginTop: "40px" }}
            onClick={() =>
              setIsExpanded({ ...isExpanded, secondary: !isExpanded.secondary })
            }
          >
            show all
          </MenuButton>
        </div>
        {isExpanded.secondary ? (
          <>
            <div
              className="secondary-success-static-buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // padding: "0 300px 0 300px",
                marginBottom: "40px",
              }}
            >
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
            <div
              className="secondary-warning-static-buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // padding: "0 300px 0 300px",
                marginBottom: "40px",
              }}
            >
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
            <div
              className="secondary-error-static-buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // padding: "0 300px 0 300px",
                marginBottom: "40px",
              }}
            >
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
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ButtonsTab;
