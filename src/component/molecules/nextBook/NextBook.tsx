import React from "react";
import { Typography, NextBookPic } from "../../atom";
import {
  NextBookSectionDiv,
  BookPicWrapper,
  NextBookContentWrapper,
  BookTime,
  token,
} from "../../../styles";

interface NextBooksProps {
  nextBookUrl: string;
  nextBookAltText: string;
  bookName: string;
  bookDescription: string;
  bookTime: string;
}

const NextBook: React.FC<NextBooksProps> = ({
  nextBookUrl,
  nextBookAltText,
  bookDescription,
  bookName,
  bookTime,
}) => {
  return (
    <NextBookSectionDiv>
      <BookPicWrapper>
        <NextBookPic
          nextBookUrl={nextBookUrl}
          nextBookAltText={nextBookAltText}
        />
      </BookPicWrapper>
      <NextBookContentWrapper>
        <div>
          <Typography
            content={bookName}
            type="h2"
            color={token.colors.next_book_title}
            weight="700"
            fontSize={token.fonts.fontSize16}
          />
        </div>
        <div>
          <Typography
            content={bookDescription}
            type="h3"
            color={token.colors.next_book_description}
            weight="400"
            fontSize={token.fonts.body}
          />
        </div>
      </NextBookContentWrapper>
      <BookTime>
        <Typography
          content={bookTime}
          type="h3"
          color={token.colors.next_book_description}
          weight="400"
          fontSize={token.fonts.body}
        />
      </BookTime>
    </NextBookSectionDiv>
  );
};

export { NextBook };
