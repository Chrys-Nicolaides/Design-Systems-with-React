import styled from "styled-components";

const primaryTeal = "#319795";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Condensed", "Roboto Mono", monospace;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${primaryTeal};
  border: none;
  color: white;
  font-weight: 500;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${primaryTeal};
  color: ${primaryTeal};
  font-weight: 600;
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${primaryTeal};
  font-weight: 600;
`;

export default PrimaryButton;
