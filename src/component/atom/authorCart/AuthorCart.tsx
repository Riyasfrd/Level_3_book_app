import React from 'react';
import { AuthorPictureDiv } from '../../../styles';

interface AuthorImageProps {
    authorMobileUrl: string;
    authorDesktopUrl: string;
    altText: string;
}

const AuthorCart: React.FC<AuthorImageProps> = ({authorDesktopUrl, authorMobileUrl, altText}) => {
  return (
    <AuthorPictureDiv>

        <source
          media="{min-width: 768px}"
          srcSet={authorDesktopUrl}
        />
        <img src={authorMobileUrl} alt={altText} />
        
    </AuthorPictureDiv>
  );
};

export { AuthorCart };