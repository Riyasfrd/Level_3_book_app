import styled from "styled-components";
import {token, HeadH2} from "../../index"

export const CartTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 20px 30px;
    
    & ${HeadH2} {
        color: ${token.colors.base_Secondary_Color_5};
    }
    
`;