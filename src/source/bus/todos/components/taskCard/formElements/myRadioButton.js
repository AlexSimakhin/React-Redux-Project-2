import React, { useEffect } from 'react';
import { useField } from "formik";
import { numWords } from './scripts/radioNumClassText';

export const MyRadioButton = ({tag, options, setFieldValue, ...props }) => {
  const [field, meta] = useField({ ...props });
  
  useEffect(() => {
    setFieldValue(props.name, tag);
  }, [props.name, setFieldValue, tag]);

  const radioItemsJSX = options.map((value, index) => {
    return (
      <span
        className={`tag ${numWords(index + 1)} ${value === meta.value ? 'selected' : ''}`}
        key={value}
        onClick={val => {
          setFieldValue(field.name, val.target.innerText);
        }}>
        {value}
      </span>
    );
  });

  return (
    <div className="tags">
      {radioItemsJSX}
    </div>
  )
};