/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { getCountOfUncompleted, getAllTasksCount } from 'startup/redux/selectors';
import { toggleAllTodosCompleted, deleteAllCompleted } from 'startup/redux/actions';

import CustomButton from 'components/ui/CustomButton';

const CompletedControlsSection = ({
  allTasksCount,
  countOfUncompleted,
  dispatch,
}) => {
  const isAnyUncompleted = countOfUncompleted > 0;

  const changeStatusFunction = useCallback(() => {
    dispatch(toggleAllTodosCompleted(isAnyUncompleted));
  }, [isAnyUncompleted]);

  const handleDelete = useCallback(() => {
    dispatch(deleteAllCompleted());
  }, []);

  return (
    <div className="completed-controls-section">
      <span className="counter">
        {isAnyUncompleted ? `You have ${countOfUncompleted} uncompleted tasks` : ''}
      </span>
      <CustomButton
        className="toggle-all-tasks-btn"
        title={`${isAnyUncompleted ? 'Complete all' : 'Uncomplete all'}`}
        onClick={changeStatusFunction}
        outline={!isAnyUncompleted}
      />
      <CustomButton
        className="delete-completed-btn"
        title="Delete completed"
        isDisabled={countOfUncompleted === allTasksCount}
        onClick={handleDelete}
      />
    </div>
  );
};

export default connect(state => ({
  countOfUncompleted: getCountOfUncompleted(state),
  allTasksCount: getAllTasksCount(state),
}))(CompletedControlsSection);
