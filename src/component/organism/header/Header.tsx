import React from 'react';
import { Logo, IconHumberg } from '../../atom';
import { HeaderDiv, LogoWrapper } from '../../../styles';
import { SearchBox, LanguageSection } from '../../molecules';


interface Props {
  togglePanel: () => void;
}

const Header: React.FC<Props> = ({togglePanel}) => {
  return (
    <HeaderDiv>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
        <SearchBox />
        <LanguageSection />
        <IconHumberg toggleMenu={togglePanel} />
    </HeaderDiv>
  );
};

export { Header };