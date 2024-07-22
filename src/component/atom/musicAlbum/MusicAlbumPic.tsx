import React from 'react';
import { MusicAlbumPicDiv } from '../../../styles';

interface Props {
  albumUrl: string;
  altText: string;
  isActive: boolean;
}

const MusicAlbumPic: React.FC<Props> = ({albumUrl, altText, isActive=false}) => {
  return (
    <MusicAlbumPicDiv isActive ={isActive}>
        <img src={albumUrl} alt={altText} />
    </MusicAlbumPicDiv>
  );
};

export { MusicAlbumPic };