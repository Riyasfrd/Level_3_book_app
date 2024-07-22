import styled from "styled-components";
import { token } from "../token/var";

export const MusicIconsDiv = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    
`;

export const Previous = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${token.colors.music_icon_background};
    height: 40px;
    width: 40px;
    cursor: pointer;
`;

export const Next = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${token.colors.music_icon_background};
    height: 40px;
    width: 40px;
    cursor: pointer;
`;

export const Pause = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 4px solid ${token.colors.base_Secondary_Color_6};
    height: 50px;
    width: 50px;
    cursor: pointer;
`;