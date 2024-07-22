import React from 'react';
import { CartHeading } from '../../atom';
import { CartSection } from '../../molecules';
import {BookCartItemDiv} from "../../../styles";
import { Book } from '../../../Utilities/bookData/BookDataType';

interface Props {
  bookListData : Book[];
}

const BookCartItem: React.FC<Props> = ({bookListData}) => {
  return (
    <BookCartItemDiv>
        <CartHeading 
        cartHeading=" Popular" 
        buttonProps={
            {
                buttonType: "secondary",
                buttonContent: "View all"
            }
        }
      />

        <CartSection bookListData={bookListData} />
    </BookCartItemDiv>
  );
};

export { BookCartItem };