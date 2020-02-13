import React from 'react';

import { connect } from 'react-redux';

import { toggleSortingByPriority, setActivePriorityFilter } from 'startup/redux/actions';

import CustomButton from 'components/common/CustomButton';

const buttonsData = [
  {
    id: 'all',
    title: 'All',
    filter: '',
  },
  {
    id: 'high',
    title: 'High',
    filter: 'high',
  },
  {
    id: 'medium',
    title: 'Medium',
    filter: 'medium',
  },
  {
    id: 'low',
    title: 'Low',
    filter: 'low',
  },
];

const PriorityControlsSection = ({
  isSortedByPriority,
  toggleSortingByPriority,
  activePriorityFilter,
  setActivePriorityFilter,
}) => {
  const handleClick = () => {
    toggleSortingByPriority();
  };

  const handleFilter = ({ target: { value } }) => {
    setActivePriorityFilter(value);
  };

  const renderControls = () => buttonsData.map(({ id, title, filter }) => (
    <CustomButton
      key={id}
      className={`priority-filter-btn ${filter || ''}`}
      title={title}
      outline={activePriorityFilter !== filter}
      value={filter}
      onClick={handleFilter}
    />
  ));

  return (
    <div className="priority-controls-section">
      <div className="priority-filters">
        {renderControls()}
      </div>
      <CustomButton
        className="sort-by-priority-btn"
        onClick={handleClick}
        title={isSortedByPriority ? 'Sort by time' : 'Sort by priority'}
        outline={isSortedByPriority}
      />
    </div>
  );
};

export default connect(null, {
  toggleSortingByPriority,
  setActivePriorityFilter,
})(PriorityControlsSection);
