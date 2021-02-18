import { useState } from "react";

export const useIfCompleted = (state = false) => {
  const [ifCompleted, setCompleted] = useState(state);

  const _onclickSetCompleted = () => {
    ifCompleted ? setCompleted(false) : setCompleted(true);
  };

  return { ifCompleted, _onclickSetCompleted };
}