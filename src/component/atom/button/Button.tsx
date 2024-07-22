// Button.tsx
import React from 'react';
import { StyledButton } from "../../../styles/index"

interface ButtonProps {
  buttonType: 'primary' | 'secondary';
  buttonContent: string;
}

export const Button: React.FC<ButtonProps> = ({ buttonType, buttonContent }) => {
  return (
    <StyledButton buttonType={buttonType}>
      {buttonContent}
    </StyledButton>
  );
};
