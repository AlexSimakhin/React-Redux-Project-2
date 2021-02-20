import React from 'react';
import { TaskCard } from '../taskCard';
import { TasksList } from '../tasksList';
import { useToDoValues } from './hooks/useToDoValues';

export const WrapperTasks = ({ ifClickedTask, ifClickedCreateTask, _onclickSetClickedTask, isFetching, data }) => {
  const { initialValues, setInitialValues, resetInitialValues } = useToDoValues();

  return (
    <div className="wrap">
      <TasksList _onclickSetClickedTask={_onclickSetClickedTask} data={data} setInitialValues={setInitialValues} />
      {(ifClickedTask || ifClickedCreateTask) && <TaskCard ifClickedTask={ifClickedTask} initialValues={initialValues} resetInitialValues={resetInitialValues} />}
    </div>
  );
};