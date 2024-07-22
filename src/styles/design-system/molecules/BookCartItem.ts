import styled from "styled-components";
import { token } from "../token/var";

export  const BookCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 240px;
    height: 87px;
    border-radius: 16px;
    background-color: ${ token.colors.base_Secondary_Color_3 };
    gap: 25px;
`;

export const BookCartContend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 5px;
`;