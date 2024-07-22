import React from 'react';
import { AuthorsCartItem, BookCartItem } from '../organism';
import { MainArticle } from '../molecules';
import { LeftPanel } from '../organism/leftPanel/LeftPanel';

interface Props {
  // Define your props here
}

const Template: React.FC<Props> = (props) => {
  return (
    <div>
      {/* <LeftPanel /> */}
      <MainArticle />
      {/* <BookCartItem /> */}
      {/* <AuthorsCartItem /> */}
      
      
    </div>
  );
};

export { Template };