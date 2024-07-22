import React from 'react';
import { Button, Typography } from '../index';
import { CartTitle } from '../../../styles';
import { token } from '../../../styles';

interface CartHeadingProps {
  cartHeading: string; 
  buttonProps: ButtonProps;
}

interface ButtonProps {
  buttonType: "primary" | "secondary"; 
  buttonContent: string;
}

const CartHeading: React.FC<CartHeadingProps> = ({ cartHeading, buttonProps }) => {
  return (
    <CartTitle>
      <Typography 
        content={cartHeading} 
        type="h2"
        color={token.colors.base_Secondary_Color_5}
        weight="700"
        fontSize={token.fonts.sub_heading} 
      />
      <Button buttonType={buttonProps.buttonType} buttonContent={buttonProps.buttonContent} />
    </CartTitle>
  );
};

export {CartHeading};
