import React from "react";
import './ToHomeButton';

interface ToHomeButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
}

export const ToHomeButton = ({
  primary = false,
  backgroundColor,
  size = "small",
  label = "",
  ...props
}: ToHomeButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      <button 
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
      >
        {label}
      </button>
    </>
  );
};
