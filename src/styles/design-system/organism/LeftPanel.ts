import styled from "styled-components";
import { token } from "../token/var";

export const LeftPanelDiv = styled.div<{ isOpen: boolean }>`
    
    position: fixed;
    width: 212px;
    top: 0;
    right: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
    transition: left 0.3s ease;
    bottom: 0;
    padding: 0;
    margin: 0;
    background: ${token.colors.base_Secondary_Color_3};

    @media (min-width: 768px) {
        position: absolute;
        left: 0;
`;

export const LeftPanelLogoDiv = styled.div`
    margin-top: 20px;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;