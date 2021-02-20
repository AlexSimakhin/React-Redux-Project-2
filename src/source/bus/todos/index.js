import React from 'react';
import { Controls } from './components/controls';
import { WrapperTasks } from './components/wrapperTasks';
import { useTodos } from './hooks/useTodos';
import { useTask } from './hooks/useTask';

export const Todos = () => {
  const { isFetching, data} = useTodos();
  const { ifClickedCreateTask, ifClickedTask, _onclickSetClickedCreateTask, _onclickSetClickedTask } = useTask();
  
  return (
    <main>
      <Controls _onclickSetClickedCreateTask={_onclickSetClickedCreateTask}/>
      <WrapperTasks
        ifClickedTask={ifClickedTask}
        ifClickedCreateTask={ifClickedCreateTask}
        _onclickSetClickedTask={_onclickSetClickedTask}
        isFetching={isFetching}
        data={data}/>
    </main>
  );
};