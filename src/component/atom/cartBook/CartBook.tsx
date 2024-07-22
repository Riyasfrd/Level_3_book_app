import React from "react";
import { Typography } from "../index";
import { CartBookDiv } from "../../../styles";
import { token } from "../../../styles";

interface bookCart {
  bookImg: bookImgProps;
  bookTitle: bookTitleProps;
}

interface bookImgProps {
  imgMobileUrl: string;
  imgDesktopUrl: string;
  altText: string;
}

interface bookTitleProps {
  bookTitle: string;
  bookDescription: string;
}

const CartBook: React.FC<bookCart> = ({
  bookImg: { imgMobileUrl, imgDesktopUrl, altText },
  bookTitle: { bookTitle, bookDescription },
}) => {
  return (
    <CartBookDiv>
      <source media="{min-width: 768px}" srcSet={imgDesktopUrl} />
      <img src={imgMobileUrl} alt={altText} />

      <div>
        <Typography
           content={bookTitle} 
           type="h4"
           color={token.colors.book_title}
            weight="700"
          fontSize={token.fonts.fontSize16} 
         />
        <Typography 
          content={bookDescription} 
          type="p"
          color={token.colors.book_description}
          weight="400"
          fontSize={token.fonts.body}
         />
      </div>
    </CartBookDiv>
  );
};

export { CartBook };
