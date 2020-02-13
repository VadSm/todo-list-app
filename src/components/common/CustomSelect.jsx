/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';

const CustomSelect = ({
  options,
  defaultValue,
  onChange: selectCallback,
  className,
  ...selectProps
}) => {
  const defaultActiveValue = defaultValue || (options.length > 0 && options[0].title) || 'Choose';

  const [isOpen, toggleOpen] = useState(false);
  const [activeValue, changeActiveValue] = useState(defaultActiveValue);

  const handleChange = ({ target: { dataset: { title, value } } }) => {
    changeActiveValue(title);
    toggleOpen(false);
    return selectCallback ? selectCallback(value) : null;
  };

  const handleClick = useCallback(
    () => toggleOpen(!isOpen),
    [isOpen],
  );

  const renderOptions = data => (
    data.map(({ id, title, value }) => (
      <div
        key={id}
        role="button"
        tabIndex={0}
        className="option"
        onClick={handleChange}
        data-value={value}
        data-title={title}
      >
        {title}
      </div>
    ))
  );

  return (
    <div className={`custom-select ${className} ${isOpen ? 'open' : ''}`}>
      <div
        role="button"
        tabIndex={0}
        className="active-value"
        onClick={handleClick}
        {
          ...selectProps
        }
      >
        {activeValue}
      </div>
      <div className="options">
        {options.length > 0 && renderOptions(options)}
      </div>
    </div>
  );
};

export default CustomSelect;
