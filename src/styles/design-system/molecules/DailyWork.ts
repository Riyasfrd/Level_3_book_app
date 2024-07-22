import styled from "styled-components";
import { token } from "../token/var";

export const DailyWorkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${token.colors.base_Secondary_Color_3};
    width: 313px;
    height: 118px;
    border-radius: 16px;
`;

export const DailyWorkContend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 10px;
`;