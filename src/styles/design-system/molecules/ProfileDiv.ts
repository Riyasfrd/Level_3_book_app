import styled from "styled-components";
import { HeadH3 } from "../atom/Typography";
import { token } from "../token/var";

export const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 20px;

    & ${HeadH3} {
        color: ${token.colors.base_Secondary_Color_5};
    }
    
`;