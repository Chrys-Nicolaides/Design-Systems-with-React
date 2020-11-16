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
        <h3 style={{ paddingTop: "60px" }}>Button States</h3>
      </div>
      <div
        className="all-buttons"
        style={{
          margin: "0 16px 0 46px",
          paddingTop: "40px",
          display: "flex",
          flexDirection: "columns",
          alignItems: "flex-start",
        }}
      >
        <div
          className="state-names"
          style={{
            margin: "0 16px 24px 0",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ margin: "0 16px 24px 0", alignItems: "flex-start" }}>
            Default
          </div>
          <div style={{ margin: "0 16px 24px 0", alignItems: "center" }}>
            Hover
          </div>
          <div style={{ margin: "0 16px 24px 0", alignItems: "flex-end" }}>
            Active
          </div>
          <div style={{ margin: "0 16px 24px 0", alignItems: "flex-end" }}>
            Disabled
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          className="clickable-buttons"
        >
          <PrimaryButton
            style={{
              margin: "0 16px 60px 0",
            }}
            className="no-click"
          >
            Primary Button
          </PrimaryButton>
          <SecondaryButton
            style={{
              margin: "0 16px 60px",
            }}
          >
            Secondary Button
          </SecondaryButton>
          <TertiaryButton
            style={{
              margin: "0 16px 60px",
            }}
          >
            Tertiary Button
          </TertiaryButton>
          <div
            style={{
              display: "flex",
              flexDirection: "column ",
              alignItems: "flex-start",
            }}
            className="primary-status-buttons"
          >
            <PrimaryButton
              style={{
                margin: "0 16px 24px 0",
              }}
              modifiers={["success"]}
            >
              Primary Button
            </PrimaryButton>
            <PrimaryButton
              style={{
                margin: "0 16px 24px 0",
              }}
              modifiers={["warning"]}
            >
              Primary Button
            </PrimaryButton>
            <PrimaryButton
              style={{
                margin: "0 16px 24px 0",
              }}
              modifiers={["error"]}
            >
              Primary Button
            </PrimaryButton>
            <PrimaryButton
              style={{
                margin: "0 16px 24px 0",
              }}
              modifiers={["disabled"]}
            >
              Primary Button
            </PrimaryButton>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SecondaryButton
            style={{
              margin: "0 16px 24px",
            }}
            modifiers={["SecondaryButtonSuccess"]}
          >
            {" "}
            Secondary Button
          </SecondaryButton>
          <SecondaryButton
            style={{
              margin: "0 16px 24px",
            }}
            modifiers={["SecondaryButtonWarning"]}
          >
            {" "}
            Secondary Button
          </SecondaryButton>
          <SecondaryButton
            style={{
              margin: "0 16px 24px",
            }}
            modifiers={["SecondaryButtonError"]}
          >
            {" "}
            Secondary Button
          </SecondaryButton>
          <SecondaryButton
            style={{
              margin: "0 16px 24px",
            }}
            modifiers={["disabled"]}
          >
            {" "}
            Secondary Button
          </SecondaryButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <TertiaryButton
            style={{
              margin: "0 16px 24px",
            }}
            modifiers={["disabled"]}
          >
            Tertiary Button
          </TertiaryButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonsTab;
