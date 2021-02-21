import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const TILE_MODIFIERS = {
  purpleNine: ({ theme, theme: { purpleTheme } }) => `
    background-color: ${purpleTheme.purple900};
    `,

  purpleEight: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple800};
      `,

  purpleSeven: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple700};
      `,
  purpleSix: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple600};
      `,
  purpleFive: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple500};
      `,
  purpleFour: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple400};
      `,
  purpleThree: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple300};
      `,
  purpleTwo: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple200};
      `,
  purpleOne: ({ theme, theme: { purpleTheme } }) => `
      background-color: ${purpleTheme.purple100};
      `,

  // neutral-palette

  greyNine: ({ theme, theme: { neutralTheme } }) => `
    background-color: ${neutralTheme.grey900};
    `,

  greyEight: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey800};
      `,

  greySeven: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey700};
      `,
  greySix: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey600};
      `,
  greyFive: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey500};
      `,
  greyFour: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey400};
      `,
  greyThree: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey300};
      `,
  greyTwo: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey200};
      `,
  greyOne: ({ theme, theme: { neutralTheme } }) => `
      background-color: ${neutralTheme.grey100};
      `,

  // success-palette

  greenNine: ({ theme, theme: { successTheme } }) => `
    background-color: ${successTheme.green900};
    `,

  greenEight: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green800};
      `,

  greenSeven: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green700};
      `,
  greenSix: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green600};
      `,
  greenFive: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green500};
      `,
  greenFour: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green400};
      `,
  greenThree: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green300};
      `,
  greenTwo: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green200};
      `,
  greenOne: ({ theme, theme: { successTheme } }) => `
      background-color: ${successTheme.green100};
      `,

  // error-palette

  redNine: ({ theme, theme: { errorTheme } }) => `
    background-color: ${errorTheme.red900};
    `,

  redEight: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red800};
      `,

  redSeven: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red700};
      `,
  redSix: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red600};
      `,
  redFive: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red500};
      `,
  redFour: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red400};
      `,
  redThree: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red300};
      `,
  redTwo: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red200};
      `,
  redOne: ({ theme, theme: { errorTheme } }) => `
      background-color: ${errorTheme.red100};
      `,

  // warning-palette

  yellowNine: ({ theme, theme: { warningTheme } }) => `
    background-color: ${warningTheme.yellow900};
    `,

  yellowEight: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow800};
      `,

  yellowSeven: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow700};
      `,
  yellowSix: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow600};
      `,
  yellowFive: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow500};
      `,
  yellowFour: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow400};
      `,
  yellowThree: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow300};
      `,
  yellowTwo: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow200};
      `,
  yellowOne: ({ theme, theme: { warningTheme } }) => `
      background-color: ${warningTheme.yellow100};
      `,
};

const Tile = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 80px;
  margin: 10px;
`;

export const PurplePalette = styled(Tile)`
  background-color: ${(props) => props.theme.defaultText};

  ${applyStyleModifiers(TILE_MODIFIERS)}
`;

export const NeutralPalette = styled(Tile)`
  background-color: ${(props) => props.theme.defaultText};
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 60px;
  margin: 5px;

  ${applyStyleModifiers(TILE_MODIFIERS)}
`;
export const SuccessPalette = styled(Tile)`
  background-color: ${(props) => props.theme.defaultText};
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 60px;
  margin: 5px;

  ${applyStyleModifiers(TILE_MODIFIERS)}
`;
export const ErrorPalette = styled(Tile)`
  background-color: ${(props) => props.theme.defaultText};
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 60px;
  margin: 5px;

  ${applyStyleModifiers(TILE_MODIFIERS)}
`;
export const WarningPalette = styled(Tile)`
  background-color: ${(props) => props.theme.defaultText};
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 60px;
  margin: 5px;

  ${applyStyleModifiers(TILE_MODIFIERS)}
`;

