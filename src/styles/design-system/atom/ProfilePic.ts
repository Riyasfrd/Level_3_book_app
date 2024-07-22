import styled from "styled-components";
import { token } from "../token/var";

export const ProfilePicDiv = styled.div`
    display: flex;
    justify-content: Left;
    align-items: center;
    border-radius: 30px;
    background-color: ${token.colors.base_Secondary_Color_3};
    height: 50px;
    width: 243px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px 0 10px;

    img {
    width: 38px;
    height: 38px;
    }
`;