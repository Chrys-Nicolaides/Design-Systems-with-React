import styled from "styled-components";
import { typeScale } from "../systems";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: ({ props }) => `
    font-size: ${typeScale.helperText};
    padding: 8px;

    `,

  large: ({ props }) => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;

    
    `,

  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
        background-color: ${props.theme.status.warningColorHover};
    }

    &:active {
        background-color: ${props.theme.status.warningColorActive};
    }
    `,

  error: ({ props }) => `
    background-color: ${props.theme.errorColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
        background-color: ${props.theme.status.errorColorHover};
    }

    &:active {
        background-color: ${props.theme.status.errorColorActive};
    }
    `,

  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
        background-color: ${props.theme.status.successColorHover};
    }

    &:active {
        background-color: ${props.theme.status.successColorActive};
    }
    `,

  secondaryButtonWarning: ({ props }) => `
        background: none;
        border: 2px solid ${props.theme.status.warningColor};
        color: ${props.theme.status.warningColor};

    `,

  TertiaryButtonWarning: ({ props }) => `
        background: none;
        color: ${props.theme.status.warningColor};
    `,

  secondaryButtonError: ({ props }) => `
        background: none;
        border: 2px solid ${props.theme.status.errorColor};
        color: ${props.theme.status.errorColor};

    `,

  TertiaryButtonError: ({ props }) => `
        background: none;
        color: ${props.theme.status.errorColor};
    `,

  secondaryButtonSuccess: ({ props }) => `
        background: none;
        border: 2px solid ${props.theme.status.successColor};
        color: ${props.theme.status.successColor};

    `,

  TertiaryButtonSuccess: ({ props }) => `
        background: none;
        color: ${props.theme.status.successColor};
    `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    background-color: ${(props) => props.theme.primaryColorfocus};
    color: ${(props) => props.theme.textColorOnPrimary};
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColorInverted};
  }

  &:disabled {
    background-color: ${(props) => props.theme.primaryColorDisabled};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.textColor};
  font-weight: 600;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;

  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
    border-color: ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;

  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;


export default PrimaryButton