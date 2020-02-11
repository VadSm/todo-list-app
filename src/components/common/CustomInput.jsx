import React, { useEffect, useRef } from 'react';

const CustomInput = ({ className = '', withRef, placeholder, ...inputProps }) => {
  const inputElement = useRef(null);

  useEffect(() => {
    if (withRef) {
      inputElement.current.focus();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`custom-input ${className}`}>
      <input
        ref={inputElement}
        required
        {
          ...inputProps
        }
      />
      {placeholder && <span className="placeholder">{placeholder}</span>}
    </div>
  );
};

export default CustomInput;
