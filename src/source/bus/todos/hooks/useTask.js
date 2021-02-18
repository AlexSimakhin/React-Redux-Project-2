import { useState } from "react";

export const useTask = () => {
  const [ifClickedCreateTask, setClickedCreateTask] = useState(false);
  const [ifClickedTask, setClickedTask] = useState(false);

  const resetUseTask = () => {
    setClickedCreateTask(false);
    setClickedTask(false)
  };

  const _onclickSetClickedCreateTask = () => {
    setClickedCreateTask(true);
    setClickedTask(false)
  };

  const _onclickSetClickedTask = () => {
    setClickedTask(true);
    setClickedCreateTask(false)
  };

  return { ifClickedCreateTask, ifClickedTask, _onclickSetClickedCreateTask, _onclickSetClickedTask, resetUseTask };
};