import styled  from "styled-components";
import { token } from "../token/var";

export const SearchBoxDiv = styled.div`

    display: none;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${token.colors.search_box_background};
        width: 492px;
        height: 50px;
        border-radius: 30px;

        input {
            padding: 10px;
            border-radius: 30px;
            border: none;
            background-color: ${token.colors.search_box_background};
            width: 450px;
            margin-left: 25px;
        }
    }
    
`;