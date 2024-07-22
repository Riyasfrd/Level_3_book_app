import React from 'react';
import { HeadH2, HeadH3, HeadH4, Paragraph, CHeading1 } from '../../../styles/index';

type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface TypographyProps {
  content: React.ReactNode;
  type: TypographyType;
  color?: string; // Optional color prop
  weight?: string; // Optional weight prop
  fontSizeMobile?: string; // Optional fontSizeMobile prop
  fontSizeDesktop?: string; // Optional fontSizeDesktop prop
  fontSize?: string; // Optional fontSize prop
}

export const handleTypography = ({ content, type, fontSizeMobile = '28', fontSizeDesktop = '30', color = 'black', weight = '700', fontSize = '20' }: TypographyProps) => {
  switch (type) {
    case 'h1':
      return (
        <CHeading1 fontSizeMobile={fontSizeMobile} fontSizeDesktop={fontSizeDesktop} color={color} weight={weight}>{content}</CHeading1>
      )
    case 'h2':
      return <HeadH2 color={color} weight={weight} fontSize={fontSize}>{content}</HeadH2>;
    case 'h3':
      return <HeadH3 color={color} weight={weight} fontSize={fontSize}>{content}</HeadH3>;
    case 'h4':
      return <HeadH4 color={color} weight={weight} fontSize={fontSize}>{content}</HeadH4>;
    default:
      return <Paragraph color={color} weight={weight} fontSize={fontSize}>{content}</Paragraph>;
  }
};
