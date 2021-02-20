import { useState, useEffect } from "react";

export const useIfCompleted = (state) => {
  const [ifCompleted, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(state);
  }, [state]);

  const _onclickSetCompleted = () => {
    ifCompleted ? setCompleted(false) : setCompleted(true);
  };

  return { ifCompleted, _onclickSetCompleted };
}