import React from 'react';
import { LanguageIcon, Typography } from '../../atom';
import {LanguageSectionDiv, LanguageText, token} from '../../../styles';

interface Props {
  // Define your props here
}

const LanguageSection: React.FC<Props> = (props) => {
  return (
    <LanguageSectionDiv>
        <LanguageText>
            <Typography  
              content="EN" 
              type='h3'
              color={token.colors.base_Secondary_Color_5}
              weight='700'
              fontSize={token.fonts.fontSize20}
          />
        </LanguageText>
        <LanguageIcon />
    </LanguageSectionDiv>
  );
};

export { LanguageSection };