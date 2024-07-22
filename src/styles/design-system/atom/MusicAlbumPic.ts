import styled from "styled-components";
import { token } from "../token/var";

export const MusicAlbumPicDiv = styled.div<{ isActive: boolean }>`
    display: flex;
    justify-content: center;
    height: ${({isActive}) => (isActive ? "144px" : "100px")};
    width: ${({isActive}) => (isActive ? "99px" : "66px")};
    border-color: ${({isActive}) => (isActive ? token.colors.base_Secondary_Color_6 : "")};
`;