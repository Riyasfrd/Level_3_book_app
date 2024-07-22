/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { ARTICLEIMAGES as img } from '../../../Assets';
import { PicWrapper } from '../../../styles';

interface Props {
  // Define your props here
}

const LeftPanelPic: React.FC<Props> = (props) => {
  return (
    <PicWrapper>
        <img src={img.DESKTOP.left_panel_pic} alt="Left Panel Picture" />
    </PicWrapper>
  );
};

export { LeftPanelPic };