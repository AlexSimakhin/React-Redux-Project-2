import React, { useEffect } from 'react';
import {useField} from 'formik';

export const MyTextarea = ({ label, description, setFieldValue, ...props }) => {
  const [field] = useField({ ...props });
  
  useEffect(() => {
    setFieldValue(props.name, description);
  }, [props.name, setFieldValue, description]);

  return (
    <div className="description">
      <label className="label" htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text" {...field} {...props}></textarea>
    </div>
  )
};