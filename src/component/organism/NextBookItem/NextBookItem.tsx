import React from 'react';
import { Typography } from '../../atom';
import { NextBook } from '../../molecules';
import { ARTICLEIMAGES as img } from '../../../Assets';
import { NextBookItemDiv, NextBookTitle, NextBookWrapper, token } from '../../../styles';

interface Props {
  // Define your props here
}

const NextBookItem: React.FC<Props> = (props) => {
  return (
    <NextBookItemDiv>
        <NextBookTitle>
            <Typography 
                content="Next Books" 
                type="h2" 
                color={token.colors.next_book_title}
                weight="700"
                fontSize={token.fonts.fontSize22}
            />
        </NextBookTitle>
        <NextBookWrapper>
            <NextBook nextBookUrl={img.DESKTOP.book_1} nextBookAltText="next book" bookName="Book Name" bookDescription="Book Description" bookTime="02:20:03" />
            <NextBook nextBookUrl={img.DESKTOP.book_1} nextBookAltText="next book" bookName="Book Name" bookDescription="Book Description" bookTime="02:20:03" />
            <NextBook nextBookUrl={img.DESKTOP.book_1} nextBookAltText="next book" bookName="Book Name" bookDescription="Book Description" bookTime="02:20:03" />
        </NextBookWrapper>
    </NextBookItemDiv>
  );
};

export { NextBookItem };