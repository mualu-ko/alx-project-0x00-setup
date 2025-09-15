export interface PillProps {
  title: string
}
export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full" | "rounded-lg";

export interface ButtonProps {
  title: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  className?: string;
  style?: string;
}
