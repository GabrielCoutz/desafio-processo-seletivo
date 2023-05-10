import { Primary } from "./Primary";

export interface ButtonProps {
  children: string;
  className?: string;
  gradient?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  shadow?: boolean;
  onClick?: () => void;
}

export const Button = {
  Primary,
};
