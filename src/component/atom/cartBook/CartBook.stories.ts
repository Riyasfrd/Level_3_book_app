import { CartBook } from "./CartBook";
import { ARTICLEIMAGES as img } from "../../../Assets";

export default {
  title: "component/Atom/cartBook",
  component: CartBook,
  tags: ['autodocs'],
  argTypes: {
    bookImg: {
      control: {
        type: "object",
      },
    },
    bookTitle: {
      control: {
        type: "object",
      },
    },
  },
};

export const PrimaryButton = {
    args: { 
        bookImg: {
            imgMobileUrl: img.MOBILE.book_1,
            imgDesktopUrl: img.DESKTOP.book_1,
            altText: "book image",
        },
        bookTitle: {
            bookTitle: "Never eat alone",
            bookDescription: "Keith Ferrazzi",
        },
    },
  };