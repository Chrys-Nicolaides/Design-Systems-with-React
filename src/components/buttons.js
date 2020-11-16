import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../systems";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
    `,

  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
    `,

  warning: ({ theme: { status, defaultText } }) => `
    background-color: ${status.warningColor};
    color: ${defaultText};

    &:hover, &:focus {
        background-color: ${status.warningColorHover};
        color: ${status.warningDarkText};
    }

    &:active {
        background-color: ${status.warningColorActive};
        color: ${status.warningDarkText};
        border: 1.2px solid ${status.warningColorActiveBorder}
    }
    `,

  error: ({ theme: { status } }) => `
    background-color: ${status.errorColor};
    color: ${status.errorLightText};

    &:hover, &:focus {
        background-color: ${status.errorColorHover};
        color: ${status.errorLightText};
    }

    &:active {
        background-color: ${status.errorColorActive};
        color: ${status.errorColorHover};
        border: 1.2px solid ${status.errorColorHover}
    }
    `,

  success: ({ theme: { status } }) => `
    background-color: ${status.successColor};
    color: ${status.successLightText};

    &:hover, &:focus {
        background-color: ${status.successColorHover};
        color: ${status.successLightText};
    }

    &:active {
        background-color: ${status.successColorActive};
        border: 1.2px solid ${status.successColorHover};
        color: ${status.successColorHover};
    }
    `,

  disabled: ({ theme: { disabledBackgroundColor, textOnDisabled } }) => `
    background-color: ${disabledBackgroundColor};
    color: ${textOnDisabled};
    cursor: not-allowed;
    border: 1.2px solid rgb(255, 255, 255, 0);
 

    &:hover, &:focus, &:active {
      background-color: ${disabledBackgroundColor};
      color: ${textOnDisabled};
      cursor: not-allowed;
      border: 1.2px solid rgb(255, 255, 255, 0);

  }
  `,

  SecondaryButtonWarning: ({ theme, theme: { status } }) => `
        background: none;
        border: 1.2px solid ${status.warningColor};
        color: ${status.warningColor};

        &:hover, &:focus {
          background-color: ${status.warningColorHover};
          color: ${theme.defaultText};
      }
  
      &:active {
          background-color: ${status.warningColorActive};
          color: ${theme.defaultText};
          border: 1.2px solid ${status.warningColorActiveBorder}
      }
    `,

  SecondaryButtonError: ({ theme: { status } }) => `
        background: none;
        border: 1.2px solid ${status.errorColor};
        color: ${status.errorColor};

        &:hover, &:focus {
          background-color: ${status.errorColorHover};
          color: ${status.errorLightText};
      }
  
      &:active {
          background-color: ${status.errorColorActive};
          border: 1.2px solid ${status.errorColorHover}
          color: ${status.errorColorHover};
      }
    `,

  SecondaryButtonSuccess: ({ theme: { status } }) => `
        background: none;
        border: 1.2px solid ${status.successColor};
        color: ${status.successColor};

        &:hover, &:focus {
          background-color: ${status.successColorHover};
          color: ${status.successLightText};
      }
  
      &:active {
          background-color: ${status.successColorActive};
          border: 1.2px solid ${status.successColorHover}
          color: ${status.successColorHover};
      }
    `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Fira Sans Condensed", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColor};
  }

  &:focus {
    background-color: ${(props) => props.theme.primaryColorFocus};
    color: ${(props) => props.theme.textColor};
    border: 1.2px solid ${(props) => props.theme.textColor};
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColor};
    border: 1.2px solid ${(props) => props.theme.textColor};
    outline: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 1.2px solid rgb(255, 255, 255, 0);
  color: ${(props) => props.theme.textColor};
  font-weight: 500;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 1.2px solid ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.secondaryColorHover};
    color: ${(props) => props.theme.textColorInverted};
  }
  &:active {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: 1.2px solid rgba(128, 128, 128, 0.3);
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 600;

  &:hover,
  &:focus {
    // background-color: ${(props) => props.theme.secondaryColorHover};
    background-color: ${(props) => props.theme.secondaryColorHover};
    color: ${(props) => props.theme.textColorInverted};
    border: 1.2px solid rgb(255, 255, 255, 0);
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    border: 1.2px solid rgb(255, 255, 255, 0);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
