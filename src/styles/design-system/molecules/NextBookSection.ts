import styled from "styled-components";
import { token } from "../token/var";

export const NextBookSectionDiv = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  width: 313px;
  height: 80px;
  border-radius: 14px;
  background-color: ${token.colors.base_Secondary_Color_3};

`;

export const BookPicWrapper = styled.div`
    margin-top: 5px;
    margin-left: 5px;
`;

export const NextBookContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 5px;
    margin-left: 10px;
`;

export const BookTime = styled.div`
    margin-left: 50px;

`;