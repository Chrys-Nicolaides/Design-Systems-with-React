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
  primaryColor: purple[900],
  primaryBackgroundColor: grey[900],
  primaryColorHover: purple[700],
  primaryColorFocus: purple[700],
  primaryColorActive: purple[900],
  secondaryColor: purple[700],
  secondaryColorHover: purple[800],
  textColorOnPrimary: purple[100],
  textColor: purple[100],
  textColorInverted: purple[100],
  disabledBackgroundColor: grey[600],
  textOnDisabled: grey[100],
  formElementBackground: grey[100],
  textOnFormElementBackground: purple[100],
  primaryFont,
  secondaryFont,

  status: {
    warningColor: yellow[500],
    warningColorHover: yellow[600],
    warningColorActive: yellow[800],
    errorColor: red[600],
    errorColorHover: red[400],
    errorColorActive: red[700],
    successColor: green[600],
    successColorHover: green[400],
    successColorActive: green[700],
  },
};

export const darkTheme = {
  primaryColor: purple[500],
  primaryBackgroundColor: grey[300],
  primaryColorHover: purple[600],
  primaryColorFocus: purple[600],
  primaryColorActive: purple[600],
  secondaryColor: purple[300],
  secondaryColorHover: purple[800],
  secondaryColorFocus: purple[500],
  textColorOnPrimary: purple[900],
  textColor: purple[100],
  textColorInverted: purple[200],
  disabledBackgroundColor: grey[600],
  textOnDisabled: grey[100],
  formElementBackground: purple[200],
  textOnFormElementBackground: grey[100],
  primaryFont,
  secondaryFont,
  defaultText: grey[900],


  status: {
    warningColor: yellow[500],
    warningColorHover: yellow[600],
    warningColorActive: yellow[800],
    errorColor: red[500],
    errorColorHover: red[400],
    errorColorActive: red[700],
    successColor: green[500],
    successColorHover: green[300],
    successColorActive: green[700],
  },
};
