/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const CustomSelect = ({ options, defaultValue, ...selectProps }) => {
  const defaultActiveValue = defaultValue || (options.length > 0 && options[0].title) || 'Choose';

  const [isOpen, toggleOpen] = useState(false);
  const [activeValue, changeActiveValue] = useState(defaultActiveValue);

  const handleClick = ({ target: { id } }) => {
    changeActiveValue(id);
    toggleOpen(false);
  };

  const renderOptions = data => (
    data.map(({ id, title }) => (
      <div
        key={id}
        role="button"
        tabIndex={0}
        className="option"
        id={title}
        onClick={handleClick}
      >
        {title}
      </div>
    ))
  );

  return (
    <div className={`custom-select ${isOpen ? 'open' : ''}`}>
      <div
        role="button"
        tabIndex={0}
        className="active-value"
        onClick={() => toggleOpen(!isOpen)}
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