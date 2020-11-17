import React from "react";
import PrimaryButton, { SecondaryButton, TertiaryButton } from "../buttons";

const ButtonsTab = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: "46px",
          paddingTop: "60px",
        }}
      >
        <h1>Buttons</h1>
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
        <h3 style={{ paddingTop: "80px" }}>Button States</h3>
        <div className="static-buttons">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "0 300px 0 300px",
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
              justifyContent: "space-around",
              padding: "0 300px 0 300px",
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
              justifyContent: "space-around",
              padding: "0 300px 0 300px",
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
              justifyContent: "space-around",
              padding: "0 300px 0 300px",
              marginBottom: "80px",
            }}
          >
            <TertiaryButton className="no-click">Tertiary Buton</TertiaryButton>
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
            justifyContent: "space-around",
            padding: "0 300px 0 300px",
            marginBottom: "160px",
          }}
        >
          <PrimaryButton modifiers={["success"]}>Primary Button</PrimaryButton>
          <PrimaryButton modifiers={["warning"]}>Primary Button</PrimaryButton>
          <PrimaryButton modifiers={["error"]}>Primary Button</PrimaryButton>
          <PrimaryButton modifiers={["disabled"]}>Primary Button</PrimaryButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "0 300px 0 300px",
            marginBottom: "160px",
          }}
        >
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
    </div>
  );
};

export default ButtonsTab;
