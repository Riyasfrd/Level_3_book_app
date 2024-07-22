import React from 'react';
import { NextBookPicDiv } from '../../../styles';

interface NextBookProps {
  nextBookUrl: string;
  nextBookAltText: string;
}

const NextBookPic: React.FC<NextBookProps> = ({nextBookUrl, nextBookAltText}) => {
  return (
    <NextBookPicDiv>
        <img src={nextBookUrl} alt={nextBookAltText} />
    </NextBookPicDiv>
  );
};

export { NextBookPic };