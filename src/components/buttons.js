import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale, primaryFont, secondaryFont } from "../systems";


const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;

    `,

  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;

    
    `,

  warning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
        background-color: ${theme.status.warningColorHover};
    }

    &:active {
        background-color: ${theme.status.warningColorActive};
    }
    `,

  error: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
        background-color: ${theme.status.errorColorHover};
    }

    &:active {
        background-color: ${theme.status.errorColorActive};
    }
    `,

  success: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
        background-color: ${theme.status.successColorHover};
    }

    &:active {
        background-color: ${theme.status.successColorActive};
    }
    `,

  disabled: ({ theme }) => `
    background-color: ${theme.disabledBackgroundColor};
    color: ${theme.textOnDisabled};
    cursor: not-allowed;

    &:hover, &:focus, &:active {
      background-color: ${theme.disabledBackgroundColor};
      color: ${theme.textOnDisabled};
      cursor: not-allowed;
      border: none;
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
  font-family: "Fira Sans Condensed", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColor};
  }

  &:focus {
    background-color: ${(props) => props.theme.primaryColorFocus};
    color: ${(props) => props.theme.textColor};
    border: 2px solid ${(props) => props.theme.textColor};
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColor};
    border: 2px solid ${(props) => props.theme.textColor};
    outline: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.textColor};
  font-weight: 500;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColorHover};
    color: ${(props) => props.theme.textColorInverted};
  }
  &:focus, &:active {
    background-color: ${(props) => props.theme.secondaryColorFocus};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 600;
  
  &:hover {
    background-color: ${(props) => props.theme.secondaryColorHover};
    color: ${(props) => props.theme.textColorInverted};
  }
  &:focus, &:active {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    border: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;


export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column
  text-align: left;
  color: blue;
  width: 60vw;
`

export default PrimaryButton