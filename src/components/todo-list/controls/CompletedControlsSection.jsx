import React from 'react';
import { connect } from 'react-redux';

import { toggleAllTodosCompleted, deleteAllCompleted } from 'startup/redux/actions';

import CustomButton from 'components/common/CustomButton';

const CompletedControlsSection = ({
  allTasksCount,
  countOfUncompleted,
  toggleAllTodosCompleted,
  deleteAllCompleted,
}) => {
  const isAnyUncompleted = countOfUncompleted > 0;
  const changeStatusFunction = () => {
    toggleAllTodosCompleted(isAnyUncompleted);
  };

  return (
    <div className="completed-controls-section">
      <span className="counter">
        {isAnyUncompleted ? `You have ${countOfUncompleted} uncompleted tasks` : ''}
      </span>
      <CustomButton
        className={`toggle-all-tasks-btn ${!isAnyUncompleted ? 'all-completed' : ''}`}
        title={`${isAnyUncompleted ? 'Complete all' : 'Uncomplete all'}`}
        onClick={changeStatusFunction}
      />
      <CustomButton
        className="delete-completed-btn"
        title="Delete completed"
        isDisabled={countOfUncompleted === allTasksCount}
        onClick={deleteAllCompleted}
      />
    </div>
  );
};

export default connect(null, {
  toggleAllTodosCompleted,
  deleteAllCompleted,
})(CompletedControlsSection);
