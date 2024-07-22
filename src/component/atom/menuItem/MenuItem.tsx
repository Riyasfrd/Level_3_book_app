/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MenuItemDiv, ListItem, StyledLink } from '../../../styles';
import {MenuIcon} from '../../atom';

interface MenuProps {
    contend: string;
    isActive?: boolean;
    icon: JSX.Element;
}

const MenuItem: React.FC<MenuProps> = ({contend, isActive= false, icon}) => {
  return (
    <MenuItemDiv isActive = {isActive}>
        <MenuIcon  icon={icon}/>
        <ListItem > <StyledLink href='#'>{contend}</StyledLink></ListItem>
    </MenuItemDiv>
  );
};

export { MenuItem };