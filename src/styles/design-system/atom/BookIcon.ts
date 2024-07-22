import styled from "styled-components";
import { token } from "../token/var";

export const BookIconWrapper = styled.div`
  width: 41px;
  height: 41px;
`;

export const BookIconContainer = styled.div`
    width: 67px;
    height: 67px;
    border-radius: 11px;
    background-color: ${token.colors.book_icon_background};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`;