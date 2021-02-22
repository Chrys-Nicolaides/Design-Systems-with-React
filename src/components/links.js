import styled from "styled-components";

const StyledLink = styled.div`
  a {
    color: ${(props) => props.theme.lightColor};
    text-decoration: none;
    cursor: pointer;
    padding: 6px 14px;
    border: 1.8px solid rgb(255, 255, 255, 0);
    border-radius: 5px;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.textColorInverted};
    }

    &:active {
      color: ${(props) => props.theme.textColorInverted};
      border: 1.8px solid ${(props) => props.theme.textColorInverted};
    }
  }
`;

export default StyledLink;
