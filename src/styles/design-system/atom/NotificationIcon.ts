import styled from "styled-components";
import { token } from "../token/var";

export const NotificationIconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${token.colors.base_Secondary_Color_3};
    height: 50px;
    width: 50px;
`;