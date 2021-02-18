import React from 'react';
import { TaskCard } from '../taskCard';
import { TasksList } from '../tasksList';
import { useInitialValues } from './hooks/useInitialValues';

export const WrapperTasks = ({ ifClickedTask, ifClickedCreateTask, _onclickSetClickedTask, isFetching, data }) => {
  const { initialValues, setInitialValues, resetInitialValues, initialValuesFormik } = useInitialValues();

  return (
    <div className="wrap">
      <TasksList _onclickSetClickedTask={_onclickSetClickedTask} data={data} setInitialValues={setInitialValues} resetInitialValues={resetInitialValues} />
      {(ifClickedTask || ifClickedCreateTask) && <TaskCard ifClickedTask={ifClickedTask} initialValues={initialValues} setInitialValues={setInitialValues} resetInitialValues={resetInitialValues} initialValuesFormik={initialValuesFormik} />}
    </div>
  );
};