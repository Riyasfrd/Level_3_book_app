import React from 'react';
import { AuthorCart, Typography } from '../../atom/index';
import {AuthorCartSectionDiv, token} from '../../../styles';

interface AuthorProps {
  authorName: string;
  authorImage: AuthorImageProps;
}

interface AuthorImageProps {
    authorMobileUrl: string;
    authorDesktopUrl: string;
    altText: string;
}

const AuthorSection: React.FC<AuthorProps> = ({authorName, authorImage}) => {
  return (
    <AuthorCartSectionDiv>
        <AuthorCart
            authorMobileUrl={authorImage.authorMobileUrl}
            authorDesktopUrl={authorImage.authorDesktopUrl}
            altText={authorImage.altText}
        />

        <div>
            <Typography 
              content={authorName} 
              type="h4"
              color={token.colors.authoe_font_color}
              weight='600'
              fontSize={token.fonts.fontSize16}
              />
        </div>
    </AuthorCartSectionDiv>
  );
};

export { AuthorSection };