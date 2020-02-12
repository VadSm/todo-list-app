import React from 'react';

import { useHistory } from 'react-router-dom';

import CustomButton from 'components/common/CustomButton';

const FilterControlsSection = ({ activeFilter }) => {
  const buttonsData = [
    {
      id: 'all',
      title: 'All',
      filter: '',
      defaultFilter: activeFilter === undefined,
    },
    {
      id: 'active',
      title: 'Active',
      filter: 'active',
    },
    {
      id: 'done',
      title: 'Done',
      filter: 'done',
    },
  ];

  const history = useHistory();
  const handleClick = (filter) => {
    history.push(`/${filter}`);
  };

  const renderControls = () => buttonsData.map(({
    id,
    title,
    filter,
    defaultFilter,
  }) => (
    <CustomButton
      key={id}
      title={title}
      onClick={() => handleClick(filter)}
      className={`filter-btn ${defaultFilter || activeFilter === filter ? 'active-filter' : ''}`}
    />
  ));

  return (
    <div className="filter-controls-section">
      {renderControls()}
    </div>
  );
};

export default FilterControlsSection;
