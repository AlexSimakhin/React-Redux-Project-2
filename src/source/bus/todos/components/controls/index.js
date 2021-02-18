import React from 'react';

export const Controls = ({_onclickSetClickedCreateTask}) => {
  return (
    <div className="controls">
      <button className="button-create-task" onClick={_onclickSetClickedCreateTask}>New Task</button>
    </div>
  );
};
