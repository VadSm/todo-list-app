/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { toggleSortingByPriority, setActivePriorityFilter } from 'startup/redux/actions';
import { getIsSortedByPriority } from 'startup/redux/selectors';

import CustomButton from 'components/ui/CustomButton';

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
  activePriorityFilter,
  isSortedByPriority,
  dispatch,
}) => {
  const handleClick = useCallback(() => {
    dispatch(toggleSortingByPriority());
  }, []);

  const handleFilter = useCallback(({ target: { value } }) => {
    dispatch(setActivePriorityFilter(value));
  }, []);

  const priorityControls = useMemo(() => (
    buttonsData.map(({ id, title, filter }) => (
      <CustomButton
        key={id}
        className={`priority-filter-btn ${filter || ''}`}
        title={title}
        outline={activePriorityFilter !== filter}
        value={filter}
        onClick={handleFilter}
      />
    ))
  ), [activePriorityFilter]);

  return (
    <div className="priority-controls-section">
      <div className="priority-filters">
        {priorityControls}
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

export default connect(state => ({
  isSortedByPriority: getIsSortedByPriority(state),
}))(PriorityControlsSection);
