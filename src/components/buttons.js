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

  warning: ({ theme, theme: { status } }) => `
    background-color: ${status.warningColor};
    color: ${status.warningDarkText};

    &:hover, &:focus {
        background-color: ${status.warningColorHover};
        color: ${status.warningDarkText};
    }

    &:active {
        background-color: ${status.warningColorActive};
        color: ${status.warningDarkText};
        border: 1.8px solid ${status.warningColorActiveBorder}
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
        color: ${status.errorDarkText};
        border: 1.8px solid ${status.errorColorHover}
    }
    `,

  success: ({ theme, theme: { status } }) => `
    background-color: ${status.successColor};
    color: ${theme.lightColor};

    &:hover, &:focus {
        background-color: ${status.successColorHover};
        color: ${status.successLightText};
    }

    &:active {
        background-color: ${status.successColorActive};
        border: 1.8px solid ${status.successColorHover};
        color: ${status.successDarkText};
    }
    `,

  disabled: ({ theme }) => `
    background-color: ${theme.disabledBackgroundColor};
    color: ${theme.textOnDisabled};
    cursor: not-allowed;
    border: 1.8px solid rgb(255, 255, 255, 0);
 

    &:hover, &:focus, &:active {
      background-color: ${theme.disabledBackgroundColor};
      color: ${theme.textOnDisabled};
      cursor: not-allowed;
      border: 1.8px solid rgb(255, 255, 255, 0);

  }
  `,

  SecondaryButtonSuccess: ({ theme: { status } }) => `
        background: none;
        border: 1.8px solid ${status.successColor};
        color: ${status.successColor};

        &:hover, &:focus {
          background-color: ${status.successColorHover};
          border: 1.8px solid ${status.successColor};
          color: ${status.successLightText};
      }
  
      &:active {
          background-color: ${status.successColorActive};
          border: 1.8px solid ${status.successColorHover};
          color: ${status.successDarkText};
      }
    `,

  SecondaryButtonWarning: ({ theme: { status } }) => `
        background: none;
        border: 1.8px solid ${status.warningColor};
        color: ${status.warningColor};

        &:hover, &:focus {
          background-color: ${status.warningColorHover};
          color: ${status.warningDarkText};
      }
  
      &:active {
          background-color: ${status.warningColorActive};
          color: ${status.warningDarkText};
          border: 1.8px solid ${status.warningDarkText};
      }
    `,

  SecondaryButtonError: ({ theme: { status } }) => `
        background: none;
        border: 1.8px solid ${status.errorColor};
        color: ${status.errorColor};

        &:hover, &:focus {
          background-color: ${status.errorColorHover};
          color: ${status.errorLightText};
      }
  
      &:active {
          background-color: ${status.errorColorActive};
          border: 1.8px solid ${status.errorColorHover};
          color: ${status.errorDarkText};
      }
    `,

  // Static / unclickable buttons

  PrimaryHover: ({ theme }) => `
      background: ${theme.primaryColorHover};
      color: ${theme.textColor};
      border: none;
  `,
  SecondaryHover: ({ theme }) => `
      background: ${theme.secondaryColorHover};
      color: ${theme.textColorInverted};
      border: 1.8px solid ${theme.textColorInverted};
  `,
  TertiaryHover: ({ theme }) => `
      background: ${theme.tertiaryColorHover};
      color: ${theme.textColor};
      border: none;
  `,

  PrimaryActive: ({ theme }) => `
      background: ${theme.primaryColorHover};
      color: ${theme.textColor};
      border: 1.8px solid ${theme.textColor};
  `,
  SecondaryActive: ({ theme }) => `
      background: ${theme.secondaryColor};
      color: ${theme.textColorOnPrimary};
      border: 1.8px solid ${theme.textColorInverted};
  `,
  TertiaryActive: ({ theme }) => `
      background: ${theme.secondaryColor};
      color: ${theme.textColorOnPrimary};
      border: none;
  `,

  SecondaryDisabled: ({ theme }) => `
      background: none;
      color: ${theme.disabledBackgroundColor};
      border: 1.8px solid ${theme.disabledBackgroundColor};

      &:hover, &:focus, &:active {
        background: none;
        color: ${theme.disabledBackgroundColor};
        border: 1.8px solid ${theme.disabledBackgroundColor};
        cursor: not-allowed;
  
    }
  `,
  TertiaryDisabled: ({ theme }) => `
      background: none;
      color: ${theme.disabledBackgroundColor};
      border: none;
  `,

  // menu button

  MenuButton: ({ theme }) => `
  background: none;
  border: 1.8px solid rgba(128, 128, 128, 0);
  color: ${theme.lightColor};
  text-decoration: none;

  &:hover,
  &:focus {
    background: none;
    border: 1.8px solid rgba(128, 128, 128, 0.3);
    color: ${theme.lightColor};
  }

  &:active {
    background: none;
    border: 1.8px solid ${theme.secondaryColor};
    color: ${theme.secondaryColor};
  }

  `,

  // static state buttons

  PrimarySuccessHover: ({ theme, theme: { status } }) => `
      background-color: ${status.successColorHover};
      color: ${theme.lightColor};
  `,
  PrimarySuccessActive: ({ theme: { status } }) => `
      background-color: ${status.successColorActive};
      border: 1.8px solid ${status.successColorHover};
      color: ${status.successDarkText};
  `,

  PrimaryWarningHover: ({ theme, theme: { status } }) => `
      background-color: ${status.warningColorHover};
      color: ${status.warningDarkText};
    `,
  PrimaryWarningActive: ({ theme, theme: { status } }) => `
      background-color: ${status.warningColorActive};
      color: ${status.warningDarkText};
      border: 1.8px solid ${status.warningColorActiveBorder};
    `,

  PrimaryErrorHover: ({ theme: { status } }) => `
      background-color: ${status.errorColorHover};
      color: ${status.errorLightText};
    
    `,
  PrimaryErrorActive: ({ theme: { status } }) => `
      background-color: ${status.errorColorActive};
      color: ${status.errorDarkText};
      border: 1.8px solid ${status.errorColorHover};
    `,

  SecondarySuccessHover: ({ theme: { status } }) => `
      background-color: ${status.successColorHover};
      border: 1.8px solid ${status.successColor};
      color: ${status.successLightText};
 
`,
  SecondarySuccessActive: ({ theme: { status } }) => `
      background-color: ${status.successColorActive};
      border: 1.8px solid ${status.successColorHover};
      color: ${status.successDarkText};
`,

  SecondaryWarningHover: ({ theme: { status } }) => `
      background: ${status.warningColorHover};
      color: ${status.warningDarkText};
      border: 1.8px solid ${status.warningColor};

    `,

  SecondaryWarningActive: ({ theme: { status } }) => `
        background-color: ${status.warningColorActive};
        color: ${status.warningDarkText};
        border: 1.8px solid ${status.warningDarkText};
      }
    `,

  SecondaryErrorHover: ({ theme: { status } }) => `
        background-color: ${status.errorColorHover};
        color: ${status.errorLightText};
        border: 1.8px solid ${status.errorColor};

     
    `,
  SecondaryErrorActive: ({ theme: { status } }) => `
        background-color: ${status.errorColorActive};
        border: 1.8px solid ${status.errorColorHover};
        color: ${status.errorDarkText};
  
  `,
};

const Button = styled.button`
  padding: 10px 20px;
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
    border: 1.8px solid ${(props) => props.theme.textColor};
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColor};
    border: 1.8px solid ${(props) => props.theme.textColor};
    outline: none;
  }
`;

// export const linkButton = styled.Link`
//   background: none;
//   border: 1.8px solid rgba(128, 128, 128, 0);
//   color: ${(props) => props.theme.lightColor};
//   text-decoration: none;

//   &:hover,
//   &:focus {
//     background: none;
//     border: 1.8px solid rgba(128, 128, 128, 0.3);
//     color: ${(props) => props.theme.lightColor};
//   }

//   &:active {
//     background: none;
//     border: 1.8px solid ${(props) => props.theme.secondaryColor};
//     color: ${(props) => props.theme.secondaryColor};
//   }
// `;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 1.8px solid rgb(255, 255, 255, 0);
  color: ${(props) => props.theme.textColor};
  font-weight: 500;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 1.8px solid ${(props) => props.theme.secondaryColor};
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
  border: 1.8px solid rgba(128, 128, 128, 0.3);
  color: ${(props) => props.theme.secondaryColor};
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.tertiaryColorHover};
    color: ${(props) => props.theme.textColorInverted};
    border: 1.8px solid rgb(255, 255, 255, 0);
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    border: 1.8px solid rgb(255, 255, 255, 0);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const MenuButton = styled(Button)`
  background: none;
  border: 1.8px solid rgba(128, 128, 128, 0);
  color: ${(props) => props.theme.lightColor};

  &:hover,
  &:focus {
    background: none;
    border: 1.8px solid rgba(128, 128, 128, 0.3);
    color: ${(props) => props.theme.lightColor};
  }

  &:active {
    background: none;
    border: 1.8px solid ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export default PrimaryButton;
