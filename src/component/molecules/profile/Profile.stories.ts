import { Profile } from "./Profile";
import { ARTICLEIMAGES as img } from "../../../Assets";

export default {
    title: "Molecules/Profile",
    component: Profile,
    tags: ['autodocs'],
    argTypes: {
        Name: {
          description: 'Content of the button (string)',
          control: 'text',
        },
        imgProfileUrl: {
          description: 'Image',
          control: 'text',
        },
        altText: {
          description: 'Alt text',
          control: 'text',
        },
    }
};

export const ProfileSection = {
    args: {
        Name: 'John Doe',
        imgProfileUrl: img.DESKTOP.profile,
        altText: 'Profile Pic',
    }
}

