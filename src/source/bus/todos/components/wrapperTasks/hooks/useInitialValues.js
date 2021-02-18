import { useState } from "react";

export const useInitialValues = () => {
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
  

  const initialValuesFormik = {
    title: initialValues['title'],
    deadline: initialValues['deadline'],
    description: initialValues['description'],
    checklist: initialValues['checklist'],
    tag: initialValues['tag'],
    hash: initialValues['hash'],
    completed: initialValues['completed'],
  };
  

  // const updateValuesFormik = () => {
  //   initialValuesFormik['title'] = initialValues['title'];
  //   initialValuesFormik['deadline'] = initialValues['deadline'];
  //   initialValuesFormik['description'] = initialValues['description'];
  //   initialValuesFormik['checklist'] = initialValues['checklist'];
  //   initialValuesFormik['tag'] = initialValues['tag'];
  //   initialValuesFormik['hash'] = initialValues['hash'];
  //   initialValuesFormik['completed'] = initialValues['completed'];
  // };

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

  return { initialValues, setInitialValues, resetInitialValues, initialValuesFormik };
};