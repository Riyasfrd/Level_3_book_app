import { NextBookPic } from "./NextBookPic";
import { ARTICLEIMAGES as img } from "../../../Assets";

export default {
    title: "component/atom/NextBookPic",
    component: NextBookPic,
    tags: ['atom'],
    argsTypes: {
        nextBookUrl: {
            description: 'Image',
            control: 'text',
        },
        nextBookAltText: {
            description: 'Alt text',
            control: 'text',
        },
    },
};

export const NextBookPicStory = {
    args: {
        nextBookUrl: img.DESKTOP.book_1,
        nextBookAltText: 'Next Book',
    }
}