import React from "react";
import { ButtonProps, ButtonSize } from "@/interfaces/index";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-500 text-white font-semibold hover:bg-blue-600 ${sizeClasses[size]} ${shape} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
