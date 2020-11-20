import {
  blue,
  indigo,
  purple,
  pink,
  grey,
  red,
  yellow,
  green,
  teal,
} from "./colors";
import { primaryFont } from "./typography";
import { secondaryFont } from "./typography";

export const lightTheme = {
  primaryColor: purple[600],
  primaryBackgroundColor: grey[900],
  primaryColorHover: purple[700],
  primaryColorFocus: purple[700],
  primaryColorActive: purple[900],
  secondaryColor: purple[700],
  secondaryColorHover: purple[800],
  secondaryColorFocus: purple[500],
  tertiaryColorHover: purple[700],
  textColorOnPrimary: purple[100],
  textColor: purple[100],
  textColorInverted: purple[100],
  disabledBackgroundColor: grey[500],
  textOnDisabled: grey[200],
  defaultText: grey[900],
  lightColor: grey[100],
  primaryFont,
  secondaryFont,

  status: {
    warningColor: yellow[500],
    warningColorHover: yellow[600],
    warningColorActiveBorder: yellow[600],
    warningColorActive: yellow[800],
    warningDarkText: yellow[800],
    errorColor: red[600],
    errorColorHover: red[400],
    errorColorActive: red[700],
    errorLightText: red[100],
    errorDarkText: red[800],
    successColor: green[600],
    successColorHover: green[400],
    successColorActive: green[700],
    successLightText: green[100],
    successDarkText: green[800],
  },

  purpleTheme: {
    primaryPurple: purple[500],
    secondaryPurple: purple[600],
    tertiaryPurple: purple[700],
  },
};

export const darkTheme = {
  primaryColor: purple[500],
  primaryBackgroundColor: grey[300],
  primaryColorHover: purple[600],
  primaryColorFocus: purple[600],
  primaryColorActive: purple[500],
  secondaryColor: purple[300],
  secondaryColorHover: purple[900],
  secondaryColorFocus: purple[500],
  tertiaryColorHover: purple[700],
  textColorOnPrimary: purple[900],
  textColor: purple[100],
  textColorInverted: purple[200],
  disabledBackgroundColor: grey[700],
  textOnDisabled: grey[500],
  defaultText: grey[900],
  lightColor: grey[100],
  primaryFont,
  secondaryFont,

  status: {
    warningColor: yellow[300],
    warningColorHover: yellow[400],
    warningColorActiveBorder: yellow[600],
    warningColorActive: yellow[200],
    warningDarkText: yellow[800],
    errorColor: red[400],
    errorColorHover: red[500],
    errorColorActive: red[300],
    errorLightText: red[100],
    errorDarkText: red[800],
    successColor: green[500],
    successColorHover: green[700],
    successColorActive: green[300],
    successLightText: green[100],
    successDarkText: green[800],
  },
  purpleTheme: {
    purple900: purple[900],
    purple800: purple[800],
    purple700: purple[700],
    purple600: purple[600],
    purple500: purple[500],
    purple400: purple[400],
    purple300: purple[300],
    purple200: purple[200],
    purple100: purple[100],
  },
};
