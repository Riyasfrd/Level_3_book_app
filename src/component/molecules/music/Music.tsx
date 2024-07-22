import React from 'react';
import { MusicAlbumPic, MusicIcons, MusicAlbumName } from '../../atom';
import { ARTICLEIMAGES as img } from '../../../Assets';
import { MusicDiv, AlbumPicWrapper, AlbumNameWrapper, IconWrapper } from '../../../styles';

interface Props {
  // Define your props here
}

const Music: React.FC<Props> = (props) => {
  return (
    <MusicDiv>
         <AlbumPicWrapper>
            <MusicAlbumPic isActive={false} albumUrl={img.DESKTOP.book_1} altText='album' />
            <MusicAlbumPic isActive={true} albumUrl={img.DESKTOP.album_pic_1} altText='album' />
            <MusicAlbumPic isActive={false} albumUrl={img.DESKTOP.book_2} altText='album' />

         </AlbumPicWrapper>

        <AlbumNameWrapper>
            <MusicAlbumName albumName='Album Name' authorName='Author Name' />
        </AlbumNameWrapper>

        <IconWrapper>
            <MusicIcons />    
        </IconWrapper> 
    </MusicDiv>
  );
};

export { Music };