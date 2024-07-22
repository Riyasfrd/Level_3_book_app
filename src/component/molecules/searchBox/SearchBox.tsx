import React from 'react';
import {SearchIcon} from '../../atom';
import { SearchBoxDiv } from '../../../styles';

interface Props {
  // Define your props here
}

const SearchBox: React.FC<Props> = (props) => {
  return (
    <SearchBoxDiv>
        <input type="text" placeholder="Search Your books...." />
        <SearchIcon />
    </SearchBoxDiv>
  );
};

export { SearchBox };