import React from 'react';
import {useField} from 'formik';

export const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props });
  meta.value = props.description;

  return (
    <div className="description">
      <label className="label" htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text" {...field} {...props}></textarea>
    </div>
  )
};