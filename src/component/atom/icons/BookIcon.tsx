import React from 'react';
import {BookIconContainer, BookIconWrapper} from "../../../styles"

interface Props {
    icon: JSX.Element;
}

const BookIcon: React.FC<Props> = ({icon}) => {
  return (
    <BookIconContainer>
        <BookIconWrapper>
            {icon}
        </BookIconWrapper>
    </BookIconContainer>
  );
};

export { BookIcon };