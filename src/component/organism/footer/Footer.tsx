import React from 'react';
import { FooterDiv, FooterWrapper } from '../../../styles';
import { Typography } from '../../atom';

interface Props {
  // Define your props here
}

const Footer: React.FC<Props> = (props) => {
  return (
    <FooterDiv>
        <FooterWrapper>
          <Typography content="© All Rights Reserved" type='h3'/>     
        </FooterWrapper>
    </FooterDiv>
  );
};

export { Footer };