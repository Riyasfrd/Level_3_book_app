import React from 'react';
import {IconHumbergDiv} from "../../../styles";

interface Props {
  toggleMenu: () => void;
}

const IconHumberg: React.FC<Props> = ({toggleMenu}) => {
  return (
    <IconHumbergDiv role="button" onClick={toggleMenu}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6.66667V5H17.5V6.66667H2.5ZM2.5 10.8333H17.5V9.16667H2.5V10.8333ZM2.5 15H17.5V13.3333H2.5V15Z" fill="white"/>
        </svg>      
    </IconHumbergDiv>
  );
};

export { IconHumberg };