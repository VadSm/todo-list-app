import React from 'react';

const CustomButton = ({
  className = '',
  title,
  isDisabled,
  outline,
  ...buttonProps
}) => (
  <button
    type="button"
    className={`custom-button ${className} ${outline ? 'outline' : ''}`}
    disabled={isDisabled}
    {
      ...buttonProps
    }
  >
    {title}
  </button>
);

export default CustomButton;
