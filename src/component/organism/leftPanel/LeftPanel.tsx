import React from 'react';
import { Menu } from '../../molecules';
import { Logo, LeftPanelPic } from '../../atom';
import { LeftPanelDiv, LeftPanelLogoDiv } from '../../../styles';


interface Props {
  isOpen: boolean;
}

const LeftPanel: React.FC<Props> = ({isOpen}) => {

    
  return (
    <LeftPanelDiv isOpen={isOpen}>
      <LeftPanelLogoDiv>
        <Logo />
      </LeftPanelLogoDiv>
        <Menu />
        <LeftPanelPic />
    </LeftPanelDiv>
  );
};

export { LeftPanel };