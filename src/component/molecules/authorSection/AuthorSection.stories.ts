import { AuthorSection } from "./AuthorSection";
import { ARTICLEIMAGES as img } from "../../../Assets";

export default {
    title: "component/molecules/AuthorSection",
    component: AuthorSection,
    tags: ['autodocs'],
    argTypes: {
        authorImage: {
            control: {
              type: "object",
            },
          },
          authorName: {
            description: 'Content of the button (string)',
            control: 'text', 
          },
        }
  };
  
  export const CartSectionComponent = {
      args: {
        authorImage: {
            authorMobileUrl: img.MOBILE.author_1,
            authorDesktopUrl: img.DESKTOP.author_1,
            altText: "author image",
        },
        authorName:"Keith Ferrazzi",
      }
  }