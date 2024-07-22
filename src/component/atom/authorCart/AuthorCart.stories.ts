import { AuthorCart } from "./AuthorCart";
import { ARTICLEIMAGES as img } from "../../../Assets";

export default {
    title: 'component/Atom/AuthorCart',
    component: AuthorCart,
    tags: ['addons'],
    argTypes: {
        authorMobileUrl: {
            control: 'text',
        },
        authorDesktopUrl: {
            control: 'text',
        },
        altText: {
            control: 'text',
        },
    },
};


export const AuthorCartComp= {
    args :{
        authorMobileUrl: img.MOBILE.author_1,
        authorDesktopUrl: img.DESKTOP.author_1,
        altText: "author image",
    }
}
