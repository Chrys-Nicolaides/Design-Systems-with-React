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

export const lightTheme = {
  primaryColor: indigo[900],
  primaryColorHover: indigo[700],
  primaryColorFocus: indigo[700],
  primaryColorActive: indigo[900],
  textColorOnPrimary: indigo[100],
  textColor: indigo[100],
  textColorInverted: indigo[100],
  disabled: grey[600],
  textOnDisabled: grey[300],
  formElementBackground: grey[100],
  textOnFormElementBackground: indigo[100],
  primaryFont,

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
  primaryColor: grey[100],
  primaryColorHover: indigo[400],
  primaryColorFocus: indigo[500],
  primaryColorActive: indigo[500],
  textColorOnPrimary: indigo[900],
  textColor: indigo[700],
  textColorInverted: indigo[200],
  disabled: grey[600],
  textOnDisabled: grey[300],
  formElementBackground: indigo[200],
  textOnFormElementBackground: grey[100],
  primaryFont,

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
