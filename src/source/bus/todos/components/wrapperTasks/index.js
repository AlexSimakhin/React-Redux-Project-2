import React from 'react';
import {TaskCard} from '../taskCard';
import {TasksList} from '../tasksList';

export const WrapperTasks = ({
  ifClickedTask,
  ifClickedCreateTask,
  _onclickSetClickedTask,
  isFetching,
  data,
  initialValues,
  setInitialValues,
  resetInitialValues
}) => {

  return (
    <div className="wrap">
      <TasksList
        _onclickSetClickedTask={_onclickSetClickedTask}
        data={data}
        setInitialValues={setInitialValues}
      />

      {
        (ifClickedTask || ifClickedCreateTask)
          && <TaskCard
          ifClickedTask={ifClickedTask}
          initialValues={initialValues}
          resetInitialValues={resetInitialValues}
        />
      }
      
    </div>
  );
};