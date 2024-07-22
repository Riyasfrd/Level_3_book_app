import React from "react";
import { CartBook } from "../../atom/index";
import { CartSectionDiv } from "../../../styles";
import { Book } from "../../../Utilities/bookData/BookDataType";

interface CartSectionProps {
  bookListData: Book[];
}

const CartSection: React.FC<CartSectionProps> = ({
  bookListData
}) => {
  return(
    <div>
      <CartSectionDiv>
        {
          bookListData && bookListData.length > 0 ? (
            bookListData.map((book, index) => {
            return (
              <CartBook
                key={index}
                bookImg={{
                  imgMobileUrl: book.imgMobileUrl,
                  imgDesktopUrl: book.imgDesktopUrl,
                  altText: book.altText,
                }}
                bookTitle={{
                  bookTitle: book.bookTitle,
                  bookDescription: book.bookDescription,
                }}
              />
            );
          }) 
         ) : ("Loading...") 
        }
        
      </CartSectionDiv>
    </div>
  )
};

export { CartSection };
