import { Button } from './Button';

export default {
  title: 'component/Atom/Button',
  component: Button, 
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
  },
};

export const PrimaryButton = {
  args: {
    buttonContent: 'VIEW NOW',
    buttonType: 'primary',
  },
};

export const SecondaryButton = {
  args: {
    buttonContent: 'VIEW NOW',
    buttonType: 'secondary',
  },
};
