import React from "react";
import { BookIcon, Typography } from "../../atom";
import { token, BookCartContend, BookCartContainer } from "../../../styles";

interface Props {
  icon: JSX.Element;
  value: string;
  description: string;
}

const CartItem: React.FC<Props> = ({ icon, value, description }) => {
  return (
    <BookCartContainer>
      <BookIcon icon={icon} />
      <BookCartContend>
        <Typography
          type="h2"
          content={value}
          color={token.colors.base_Secondary_Color_5}
          weight="700"
          fontSize={token.fonts.sub_heading}
        />
        <Typography
          type="h4"
          content={description}
          color={token.colors.next_book_description}
          weight="400"
          fontSize={token.fonts.fontSize17}
        />
      </BookCartContend>
    </BookCartContainer>
  );
};

export { CartItem };
