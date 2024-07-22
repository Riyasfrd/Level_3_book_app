import styled from "styled-components";
import { token } from "../../index"
import { ARTICLEIMAGES as img } from "../../../Assets";

export const MainArticleTag = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    border-radius: 24px;
    background-color: ${token.colors.main_Article_background};
    background-image: url(${img.MOBILE.Wing});
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-direction: row-reverse;
      justify-content: space-evenly;
      max-width: 775px;
      height: 280px;

`;

export const MainArticleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    text-align: center;
    gap: 20px;


    @media (min-width: 768px) {
      width: 50%;
      align-items: flex-start;
      margin: 30px 4px 30px 43px;
      text-align: left;
`;

export const MainArticlePicture = styled.div`
    
    height: 231px;
    margin-top: 20px;

    img {
    display: block;
    width: 100%;
    height: 231px;
    }

  @media (min-width: 768px) {
    img {
      width: 100%;
      padding-right: 67px;
    }
`;
