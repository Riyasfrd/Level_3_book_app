import { MainArticlePicture } from "../../../styles"

export interface ArticlePictureProps {
  imgMobileUrl: string;
  imgDesktopUrl: string;
  altText: string;
}

export const ArticlePicture: React.FC<ArticlePictureProps> = ({
  imgMobileUrl,
  imgDesktopUrl,
  altText = "Article Picture",
}) => {
  return (
    <MainArticlePicture>
        <source
          media="{min-width: 768px}"
          srcSet={imgDesktopUrl}
        />
        <img src={imgMobileUrl} alt={altText} />
      </MainArticlePicture>
  )
}
