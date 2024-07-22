import { Typography, ArticlePicture, Button } from "../../atom";
import { MainArticleTag, MainArticleContainer } from "../../../styles";
import { ARTICLEIMAGES as img } from "../../../Assets";
import { token } from "../../../styles";

export const MainArticle = () => {
  return (
    <MainArticleTag>
        <ArticlePicture imgMobileUrl={img.MOBILE.MainArticlePic} imgDesktopUrl={img.DESKTOP.MainArticlePic} altText="Picture" />

        <MainArticleContainer>
          <Typography 
              content="TRENDING BOOK THIS MONTH" 
              type="h1" 
              color={token.colors.base_Secondary_Color_3} 
              weight="900" 
              fontSizeMobile="28px" 
              fontSizeDesktop="30px" 
            />
            <Typography 
                content="Listen to trending books in this months" 
                type="h3"
                color={token.colors.base_Secondary_Color_4}
                weight="400"
                fontSize={token.fonts.fontSize18}
            />

            <Button buttonType="primary" buttonContent="View All" />
      </MainArticleContainer>

      
    </MainArticleTag>
  );
};
