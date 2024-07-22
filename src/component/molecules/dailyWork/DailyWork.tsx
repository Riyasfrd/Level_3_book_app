import React from "react";
import { Typography, DailyWorkBookIcon, ProgressBar } from "../../atom";
import { token, DailyWorkContend, DailyWorkContainer} from "../../../styles";
import { DailyWorkIcon } from "../../../Assets/icons/Icons"

interface Props {
  progressBook: number;
  totalBook: number;
}

const DailyWork: React.FC<Props> = ({ progressBook, totalBook }) => {
  return (
    <DailyWorkContainer>
      <DailyWorkContend>  
        <Typography
          type="h3"
          content="Books this week"
          color={token.colors.base_Secondary_Color_6}
          weight="600"
          fontSize={token.fonts.fontSize20}
        />
        <DailyWorkBookIcon icon={<DailyWorkIcon />} />
      </DailyWorkContend>
      <div>
        <ProgressBar progress={progressBook} total={totalBook} color={token.colors.base_Secondary_Color_6} />
      </div>
    </DailyWorkContainer>
  );
};

export { DailyWork };
