import React from 'react';

const CustomCheckbox = ({ className = '', isChecked, ...inputProps }) => (
  <input
    type="checkbox"
    checked={isChecked}
    className={`custom-checkbox ${className}`}
    {
      ...inputProps
    }
  />
);

export default CustomCheckbox;
