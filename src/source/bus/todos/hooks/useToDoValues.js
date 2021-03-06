import { useState } from "react";

export const useToDoValues = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    deadline: new Date(),
    description: '',
    checklist: [
      {
        "title": "Text tttt",
        "completed": true,
      }
    ],
    tag: null,
    hash: null,
    completed: null,
  });

  const resetInitialValues = () => {
    setInitialValues({
      title: '',
      deadline: new Date(),
      description: '',
      checklist: [
        {
          "title": "Text tttt",
          "completed": true,
        }
      ],
      tag: null,
      hash: null,
      completed: null,
    });
  };

  return { initialValues, setInitialValues, resetInitialValues };
};