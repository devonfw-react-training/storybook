import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const handleOnChange = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
      onClick={handleOnChange}
    >
      {label}
    </button>
  );
};
