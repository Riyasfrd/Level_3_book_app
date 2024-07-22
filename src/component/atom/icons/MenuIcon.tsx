import React from 'react';
import { MenuIconDiv } from '../../../styles';

interface Props {
  icon: JSX.Element;
}

const MenuIcon: React.FC<Props> = ({icon}) => {
  return (
    <MenuIconDiv>
        {icon}
    </MenuIconDiv>
  );
};

export { MenuIcon };