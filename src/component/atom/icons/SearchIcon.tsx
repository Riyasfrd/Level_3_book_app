import React from 'react';
import { SearchIconDiv } from '../../../styles';

interface Props {
  // Define your props here
}

const SearchIcon: React.FC<Props> = (props) => {
  return (
    <SearchIconDiv>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_501_4914)">
        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#27A857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.0004 18.9999L14.6504 14.6499" stroke="#27A857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_501_4914">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </SearchIconDiv>
  );
};

export { SearchIcon };