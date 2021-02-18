import React from 'react';
import {useField} from 'formik';

export const MyTitleInput = ({ ...props }) => {
  const [field, meta] = useField({ ...props });
  // console.log(field, meta);
  meta.value = props.title;
  
  return (
    <>
      <input className="title" {...field} {...props}></input>
    </>
  );
};