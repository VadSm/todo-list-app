import React from 'react';

import { connect } from 'react-redux';

import { toggleSortingByPriority } from 'startup/redux/actions';

import CustomButton from 'components/common/CustomButton';

const SortingControlsSection = ({ isSortedByPriority, toggleSortingByPriority }) => {
  const handleClick = () => {
    toggleSortingByPriority();
  };

  return (
    <div className="sorting-controls-section">
      <CustomButton
        className={`sort-by-priority-btn ${isSortedByPriority ? 'enabled' : ''}`}
        onClick={handleClick}
        title={isSortedByPriority ? 'Sort by time' : 'Sort by priority'}
      />
    </div>
  );
};

export default connect(null, {
  toggleSortingByPriority,
})(SortingControlsSection);
