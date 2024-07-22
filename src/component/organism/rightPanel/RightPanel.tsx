import React from 'react';
import { Profile, Music, DailyWork } from '../../molecules';
import { ARTICLEIMAGES as img } from '../../../Assets';
import { NextBookItem } from '../index';
import { RightPanelDiv } from '../../../styles';

interface Props {
  // Define your props here
}

const RightPanel: React.FC<Props> = (props) => {
  return (
    <RightPanelDiv>
        <div>
            <Profile Name='John Doe' imgProfileUrl={img.DESKTOP.profile} altText='profile' />
        </div>

        <div>
            <Music />
        </div>

        <div>
            <NextBookItem />
        </div>

        <div>
            <DailyWork progressBook={3} totalBook={5} />
        </div>

    </RightPanelDiv>
  );
};

export { RightPanel };