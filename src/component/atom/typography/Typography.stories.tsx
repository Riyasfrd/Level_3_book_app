import { Typography } from "./Typography";

export default {
  title: "Component/Atom/Typography",
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'Content of the button (string)',
    },
    type: {
      description: 'Type of the button (primary | secondary)',
    },
}
};

export const MainHeading = {
    args: {
        content: "TRENDING BOOKS THIS MONTHS",
        type: "h1",
    },
};

export const SubHeading = {
    args: {
        content: "Listen to trending books in this months",
        type: "h2",
    },
};