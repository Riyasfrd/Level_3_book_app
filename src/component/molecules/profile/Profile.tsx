import React from 'react';
import { NotificationIcon, ProfilePic } from '../../atom';
import { ProfileDiv } from '../../../styles';

interface ProfileProps {
    Name: string;
    imgProfileUrl: string;
    altText: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <ProfileDiv>
        <div>
            <NotificationIcon />
        </div>

        <div>
            <ProfilePic Name={props.Name} imgProfileUrl={props.imgProfileUrl} altText={props.altText} />
        </div>
    </ProfileDiv>
  );
};

export { Profile };