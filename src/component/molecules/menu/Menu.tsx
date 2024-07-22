import React from 'react';
import { MenuItem } from '../../atom';
import { MenuDiv,NavList } from '../../../styles';
import { HomeIcon, CategoryIcon, FavoriteIcon, LibraryIcon, SettingIcon, LogoutIcon } from '../../../Assets/icons/Icons';


interface Props {
  // Define your props here
}

const Menu: React.FC<Props> = (props) => {
  return (
    <MenuDiv>
        <NavList>
            <MenuItem icon={<HomeIcon />} isActive={true} contend='Home' />
            <MenuItem icon={<CategoryIcon />} contend='Category' />
            <MenuItem icon={<FavoriteIcon />} contend='Favorite' />
            <MenuItem icon={<LibraryIcon />} contend='Your Library' />
            <MenuItem icon={<SettingIcon />} contend='Setting' />
            <MenuItem icon={<LogoutIcon />} contend='Logout' />
        </NavList>
    </MenuDiv>
  );
};

export { Menu };