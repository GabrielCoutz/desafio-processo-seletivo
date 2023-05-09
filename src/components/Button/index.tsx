import { Primary } from "./Primary";

export interface ButtonProps {
  children: string;
  className?: string;
  gradient?: boolean;
  fullWidth?: boolean;
  shadow?: boolean;
}

export const Button = {
  Primary,
};
