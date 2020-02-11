import React from 'react';

const CustomCheckbox = ({ className = '', ...inputProps }) => (
  <input
    type="checkbox"
    className={`custom-checkbox ${className}`}
    {
      ...inputProps
    }
  />
);

export default CustomCheckbox;
