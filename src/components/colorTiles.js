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
};

const Tile = styled.button`
  width: 40px;
  height: 40px;
  border: none;
`;

const PurplePalette = styled(Tile)`
  background-color: ${(props) => props.theme.defaultText};

  ${applyStyleModifiers(TILE_MODIFIERS)}
`;

export default PurplePalette;
