import React from 'react';
import { Typography } from '../typography/Typography';
import { ProfilePicDiv, ImageWrapper, token } from '../../../styles';

interface ProfileProps {
    Name: string;
    imgProfileUrl: string;
    altText: string;
}

const ProfilePic: React.FC<ProfileProps> = ({Name, imgProfileUrl, altText}) => {
  return (
    <ProfilePicDiv>
      <ImageWrapper>
        <img src={imgProfileUrl} alt={altText} />
      </ImageWrapper>
        <Typography 
          content={Name} 
          type='h3'
          color={token.colors.base_Secondary_Color_5}
          weight='600'
          fontSize={token.fonts.fontSize17}
         />

    </ProfilePicDiv>
  );
};

export { ProfilePic };