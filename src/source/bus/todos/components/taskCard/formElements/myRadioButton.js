import React from 'react';
import { useField, useFormikContext } from "formik";
import { numWords } from './scripts/radioNumClassText';

export const MyRadioButton = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField({ ...props });
  meta.value = props.tag;

  const radioItemsJSX = props.options.map((value, index) => {
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