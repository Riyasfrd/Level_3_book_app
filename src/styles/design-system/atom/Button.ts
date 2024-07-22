import styled, { css } from "styled-components";
//import { token } from '../../index';
import { token } from "../token/var";

interface StyledButtonProps {
  buttonType: "primary" | "secondary";
}

const primaryStyles = css`
  background-color: ${token.colors.base_Secondary_Color_2};
  color: ${token.colors.base_Secondary_Color_3};

  &:hover {
    background-color: ${token.colors.base_Secondary_Color_2_hover};
  }
`;

const secondaryStyles = css`
  
  color: ${token.colors.base_Secondary_Color_6};
  background-color: ${token.colors.body_background};

 
`;

// Styled-component for the button
const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  font-size: ${token.fonts.button};
  font-weight: bold; 
  border: none;
  width: 140px;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.5s ease;

  &:hover { 
    transition: all 0.3s ease; 
  }

  ${(props) => props.buttonType === "primary" && primaryStyles}
  ${(props) => props.buttonType === "secondary" && secondaryStyles}
`;

export { StyledButton };
