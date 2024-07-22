import { CartHeading } from "./CartHeading";

export default {
  title: 'component/Atom/cart',
  component: CartHeading, 
   tags: ['autodocs'],
  argTypes: {
    buttonContent: {
      description: 'Content of the button (string)',
      control: 'text',
    },
    buttonType: {
      description: 'Type of the button (primary | secondary)',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    cartHeading: {
        description: 'Content of the cart heading (string)',
        control: 'text',
    }
  },
};

export const PopularBooks = {
  args: {
    cartHeading: 'Popular',
    buttonContent: 'View all',
    buttonType: 'secondary',
  },
};

