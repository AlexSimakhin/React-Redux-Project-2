import React from 'react';
import { Controls } from './components/controls';
import { WrapperTasks } from './components/wrapperTasks';
import { useTodosFetch } from './hooks/useTodosFetch';
import { useTask } from './hooks/useTask';
import { useToDoValues } from './hooks/useToDoValues';

export const Todos = () => {
  const { isFetching, data} = useTodosFetch();
  const { ifClickedCreateTask, ifClickedTask, _onclickSetClickedCreateTask, _onclickSetClickedTask } = useTask();
  const { initialValues, setInitialValues, resetInitialValues } = useToDoValues();
  
  return (
    <main>
      
      <Controls _onclickSetClickedCreateTask={_onclickSetClickedCreateTask} resetInitialValues={resetInitialValues} />

      <WrapperTasks
        ifClickedTask={ifClickedTask}
        ifClickedCreateTask={ifClickedCreateTask}
        _onclickSetClickedTask={_onclickSetClickedTask}
        isFetching={isFetching}
        data={data}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        resetInitialValues={resetInitialValues}
      />
      
    </main>
  );
};