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

export const defaultTheme = {
  primaryColor: teal[700],
  primaryColorHover: teal[400],
  primaryColorFocus: teal[600],
  primaryColorActive: blue[500],
  textColorOnPrimary: teal[200],
  textColor: teal[700],
  textColorInverted: teal[800],
  disabled: grey[600],
  textOnDisabled: grey[300],
  formElementBackground: grey[100],
  textOnformElementBackground: teal[900],
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
  primaryColor: purple[200],
  primaryColorHover: purple[400],
  primaryColorFocus: purple[300],
  primaryColorActive: pink[500],
  textColorOnPrimary: purple[900],
  textColor: purple[900],
  textColorInverted: purple[200],
  disabled: grey[600],
  textOnDisabled: grey[300],
  formElementBackground: purple[200],
  textOnformElementBackground: grey[100],
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
