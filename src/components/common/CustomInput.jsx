import React from 'react';

const CustomInput = ({ className = '', placeholder, ...inputProps }) => (
  <div className={`custom-input ${className}`}>
    <input
      required
      {
        ...inputProps
      }
    />
    {placeholder && <span className="placeholder">{placeholder}</span>}
  </div>
);

export default CustomInput;
