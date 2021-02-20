import React, { useEffect } from 'react';
import {useField} from 'formik';

export const MyTitleInput = ({ title, setFieldValue, ...props }) => {
  const [field] = useField({ ...props });

  useEffect(() => {
    setFieldValue(props.name, title);
  }, [props.name, setFieldValue, title]);
  
  return (
    <>
      <input className="title" {...field} {...props}></input>
    </>
  );
};