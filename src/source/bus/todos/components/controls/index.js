import React from 'react';

export const Controls = ({ _onclickSetClickedCreateTask, resetInitialValues }) => {
  return (
    <div className="controls">
      <button type="button" className="button-create-task" onClick={() => { _onclickSetClickedCreateTask(); resetInitialValues(); }}>New Task</button>
    </div>
  );
};
