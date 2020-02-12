import React from 'react';

const CustomButton = ({
  className = '',
  title,
  isDisabled,
  ...buttonProps
}) => (
  <button
    type="button"
    className={`custom-button ${className}`}
    disabled={isDisabled}
    {
      ...buttonProps
    }
  >
    {title}
  </button>
);

export default CustomButton;
