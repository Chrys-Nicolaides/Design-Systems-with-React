import React from "react";
import styled from "styled-components";

const StyledGradientDiv = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.lightPurple.lightPurple100},
    ${(props) => props.theme.lightPurple.lightPurple200}
  );
`;

export default StyledGradientDiv;

// const TILE_MODIFIERS = {
//   purpleNine: ({ theme, theme: { purpleTheme } }) => `
//     background-color: ${purpleTheme.purple900};
//     `,

// const Gradient = styled.div`
//   background: linear-gradient(
//     20deg,
//     hsl(${props => props.hue}, 60%, 65%),
//     hsl(${props => props.hue - 305}, 64%, 60%)
//   );
//   height: 100%;
//   width: 100%;
// `;
