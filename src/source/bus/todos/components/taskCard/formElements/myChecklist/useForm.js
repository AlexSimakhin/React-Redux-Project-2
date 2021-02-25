import { useState, useEffect } from 'react';

export const useForm = ({ field, checklist, ifClickedTask, setFieldValue }) => {
  const [form, setForm] = useState(null);
  const [adtValues, setAdtValues] = useState(null);

  useEffect(() => {
    const formValues = {};

    if (field.value && field.value.length !== 0) {
      field.value.forEach((item, index) => {
        formValues[`subTasks.${index}`] = item.title;
      });

      setForm(formValues);
    };


  }, [field.value]);

  useEffect(() => {
    const formIfCompleted = {};
    const formHash = {};

    checklist.forEach((value, index) => {
      formIfCompleted[`subTasks.${index}`] = value.completed;
      formHash[`subTasks.${index}`] = value.hash;
    });

    setAdtValues({ completed: formIfCompleted, hash: formHash });
  }, [checklist]);
  

  const handleChange = (event) => {
    event.persist();

    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value
      }
    });
  };

  const formikValues = () => {
    const values = [];

    if (ifClickedTask) {
      for (const key in form) {
        values.push({
          title: form[key],
          completed: adtValues.completed[key],
          hash: adtValues.hash[key],
        });
      }
    } else {
      for (const key in form) {
        values.push({
          title: form[key],
          completed: adtValues.completed[key],
        });
      }
    }

    setFieldValue(field.name, values);
  };

  return {
    form,
    handleChange,
    adtValues,
    formikValues
  }
};
