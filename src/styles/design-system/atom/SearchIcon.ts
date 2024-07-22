import styled from "styled-components";
import { token } from "../token/var";

export const SearchIconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    background-color: ${token.colors.base_Secondary_Color_3};
    border-radius: 50%;
    cursor: pointer;
`;