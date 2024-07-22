import React from 'react';
import { Typography } from '../typography/Typography';
import { MusicAlbumNameDiv, token } from '../../../styles';

interface AlbumProps {
  albumName: string;
  authorName: string;
}

const MusicAlbumName: React.FC<AlbumProps> = ({albumName, authorName}) => {
  return (
    <MusicAlbumNameDiv>
        <Typography 
          content={albumName} 
          type='h2'
          color={token.colors.Music_album_title}
          weight='700'
          fontSize={token.fonts.fontSize20}
        />
        <Typography 
          content={authorName} 
          type='h3'
          color={token.colors.Music_album_description}
          weight='400'
          fontSize={token.fonts.body}
         />
    </MusicAlbumNameDiv>
  );
};

export { MusicAlbumName };