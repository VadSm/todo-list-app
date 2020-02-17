import React, { useCallback } from 'react';

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
  const handleClick = useCallback(
    ({ target: { value: filter } }) => {
      history.push(`/${filter}`);
    },
    [history],
  );

  const filterControls = buttonsData.map(({
    id,
    title,
    filter,
    defaultFilter,
  }) => (
    <CustomButton
      key={id}
      title={title}
      onClick={handleClick}
      value={filter}
      outline={!defaultFilter && activeFilter !== filter}
      className="filter-btn"
    />
  ));

  return (
    <div className="filter-controls-section">
      {filterControls}
    </div>
  );
};

export default React.memo(FilterControlsSection);
