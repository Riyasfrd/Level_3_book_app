import { handleTypography } from "./Typography.handler";

interface TypographyProps {
  content: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "p";
  color?: string;
  weight?: string;
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
  fontSize?: string;
}

export const Typography = ({
  content,
  type,
  color,
  weight,
  fontSizeMobile,
  fontSizeDesktop,
  fontSize
}: TypographyProps) => {
  return handleTypography({ content, type, color, weight, fontSizeMobile, fontSizeDesktop, fontSize });
};
