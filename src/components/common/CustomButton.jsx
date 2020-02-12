import React from 'react';

const CustomButton = ({
  className = '',
  title,
  disabled,
  ...buttonProps
}) => (
  <button
    type="button"
    className={`custom-button ${className}`}
    disabled={disabled}
    {
      ...buttonProps
    }
  >
    {title}
  </button>
);

export default CustomButton;
