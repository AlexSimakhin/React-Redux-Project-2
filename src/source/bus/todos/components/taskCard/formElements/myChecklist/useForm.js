import { useState, useEffect } from 'react';

export const useForm = ({ field, checklist, ifClickedTask, setFieldValue }) => {
  const [form, setForm] = useState(null);
  const [ifCompletedValues, setIfCompletedValues] = useState({});
  const [hashValues, setHashValues] = useState({});

  // console.log(form);

  useEffect(() => {
    const formValues = {};

    if (field.value && field.value.length !== 0) {
      field.value.forEach((item, index) => {
        formValues[`subTasks.${index}`] = item.title;
        
        if (field.value.length === index + 1) {
          formValues[`subTasks.${index + 1}`] = '';
        }
      });

      console.log('formmm', formValues);

      setForm(formValues);
    };


  }, [field.value]);

  useEffect(() => {
    const formIfCompleted = {};
    const formHash = {};

    // console.log(checklist );

    if (checklist.length !== 0) {
      checklist.forEach((value, index) => {
        formIfCompleted[`subTasks.${index}`] = value.completed;
        formHash[`subTasks.${index}`] = value.hash;
      });
    } else {
      formIfCompleted[`subTasks.${0}`] = false;
      formHash[`subTasks.${0}`] = null;
    }
    

    // console.log('useEffect', formIfCompleted, formHash);

    setIfCompletedValues(formIfCompleted);
    setHashValues(formHash);
  }, [checklist]);
  

  const handleChange = (event) => {
    event.persist();

    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value
      }
    });

    formikValues();
  };

  const formikValues = () => {
    const values = [];

    if (ifClickedTask) {
      for (const key in form) {
        values.push({
          title: form[key],
          completed: ifCompletedValues[key],
          hash: hashValues[key],
        });
      }
    } else {
      for (const key in form) {
        values.push({
          title: form[key],
          completed: ifCompletedValues[key],
        });
      }
    }

    console.log('formikValues', values);
    setFieldValue(field.name, values);
  };

  return {
    form,
    handleChange,
    formikValues,
    ifCompletedValues,
    setIfCompletedValues
  }
};
