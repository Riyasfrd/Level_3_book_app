import React from "react";
import { AuthorSection } from "../../molecules";
import { CartHeading } from "../../atom";
import { AuthorCartItem, AuthorCartItemDiv } from "../../../styles";
import { Author } from "../../../Utilities/authordata/AuthorDataType";

interface Props {
  authorDataList: Author[];
}

const AuthorsCartItem: React.FC<Props> = ({authorDataList}) => {
  return (
    <AuthorCartItemDiv>
      <div>
        <CartHeading
          cartHeading="Top Authors"
          buttonProps={{
            buttonType: "secondary",
            buttonContent: "View all",
          }}
        />
      </div>

      <AuthorCartItem>

        {
          authorDataList && authorDataList.length > 0 ? (
            authorDataList.map((author, index) => {
            return (
              <AuthorSection
                key={index}
                authorName={author.authorName}
                authorImage={{
                  authorMobileUrl: author.authorMobileUrl,
                  authorDesktopUrl: author.authorDesktopUrl,
                  altText: author.altText,
                }}
              />
            );
          }) 
         ) : ("Loading...")
        }

      </AuthorCartItem>
    </AuthorCartItemDiv>
  );
};

export { AuthorsCartItem };
