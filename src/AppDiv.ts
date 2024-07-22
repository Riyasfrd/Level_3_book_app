import styled from "styled-components";
import { token } from "./styles/design-system/token/var";

export const AppDiv = styled.div`

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 212px 850px 378px;
        align-items: center;
    }
    
    
`

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: ${token.colors.body_background};

`;

export const RightPanelDiv = styled.div`

    display: none;

    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        height: 100%;
        background-color: ${token.colors.right_panel_background};
        border-radius: 30px;

    }
`;