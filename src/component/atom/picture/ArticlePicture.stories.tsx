import {ArticlePicture } from './ArticlePicture';
import { ARTICLEIMAGES as img } from '../../../Assets';

export default {
    title: 'Component/Atom/Picture/ArticlePicture',
    component: ArticlePicture,
    tags: ['autodocs'],
  argTypes: {
    imgMobileUrl: {
      description: 'Content of the button (string)',
    },
    imgDesktopUrl: {
      description: 'Type of the button (primary | secondary)',
    },
    altText: {
      description: 'Type of the button (primary | secondary)',
  },
}
};

export const ArticleImage = {
    args: {
        imgMobileUrl: img.MOBILE.MainArticlePic,
        imgDesktopUrl: img.DESKTOP.MainArticlePic,
        altText: "Article Picture",
    },
};