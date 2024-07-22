import styled from "styled-components";
import { token } from "../token/var";
import { ARTICLEIMAGES as img } from "../../../Assets";

export const MusicDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 313px;
    height: 331px;
    gap: 10px;
    border-radius: 16px;
    background-color: ${token.colors.base_Secondary_Color_3};
    
`;

export const AlbumPicWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 150px;
    margin: 10px;
    background-image: url(${img.DESKTOP.album_wing});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

export const AlbumNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-image: url(${img.DESKTOP.music});
    background-repeat: no-repeat;
    background-position: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;