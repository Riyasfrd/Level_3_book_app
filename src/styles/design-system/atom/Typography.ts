import styled from "styled-components";
import { token } from "../token/var";

export const HeadH1 = styled.h1`
    font-size: ${token.fonts.h1_mobile};
    font-weight: bold;
    color: ${token.colors.base_Secondary_Color_3};
    line-height: 1.5; 

    @media (min-width: 768px) {
        font-size: ${token.fonts.h1_desktop};
        margin-bottom: 0px;
    }
`;

export const HeadH2 = styled.h2<{ color: string; weight: string; fontSize:string }>`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    margin: 0;

`;

export const HeadH3 = styled.h3<{ color: string; weight: string; fontSize:string }>`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    margin: 0;
`;

export const HeadH4 = styled.h4<{ color: string; weight: string; fontSize:string }>`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${token.fonts.book_title_desktop};
        font-weight: lighter;
    }
`;

export const Paragraph = styled.p<{ color: string; weight: string; fontSize:string }>`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    margin: 0;
`;

export const CHeading1 = styled.h1<{ color: string; weight: string; fontSizeMobile: string; fontSizeDesktop: string }>`
    font-size: ${(props) => props.fontSizeMobile};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    line-height: 1.5; 

    @media (min-width: 768px) {
        font-size: ${(props) => props.fontSizeDesktop};
        font-weight: ${(props) => props.weight};
        margin: 0px;
    }
`;