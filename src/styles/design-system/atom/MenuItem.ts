import styled from "styled-components";
import { token } from "../token/var";

export const MenuItemDiv = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 172px;
    height: 50px;
    border-radius: 30px;
    padding: 10px 30px 10px 10px;
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? token.colors.base_Secondary_Color_2 : token.colors.base_Secondary_Color_3)};
    color: ${({ isActive }) => (isActive ? token.colors.base_Secondary_Color_3 : token.colors.menu_font_color)};

    &:hover {
        background-color: ${({ isActive }) => (isActive ? 'orange' : '#444')};
    }

`;

export const ListItem = styled.li`
  list-style: none;
  margin: 10px 0;

  
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${token.colors.menu_font_color};
  
`;