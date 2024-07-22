import styled from "styled-components";
import { token } from "../token/var";

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px ; 
    width: 100%;
    background-color: ${token.colors.header_background_mobile};

    @media (min-width: 768px) {
        width: 850px;
        background-color: ${token.colors.body_background};
        margin-top: 10px;
        & Logo{
            display: none;
        }
        
`;

export const LogoWrapper = styled.div`
    display: flex;

    @media (min-width: 768px) {
        display: none;
    }

`;