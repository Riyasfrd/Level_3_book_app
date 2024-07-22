import { NextBook } from "./NextBook";
import { ARTICLEIMAGES as img } from "../../../Assets";

export default {
  title: "component/molecules/NextBook",
  component: NextBook,
  tags: ['autodocs'],
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

export const NextBooks = {
  args: {
    nextBookUrl: img.DESKTOP.book_1,
    nextBookAltText: 'Next Book',
  }
}