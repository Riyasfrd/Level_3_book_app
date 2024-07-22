import styled from "styled-components";
import { token } from "../token/var";

export const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${token.colors.header_background_mobile};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;