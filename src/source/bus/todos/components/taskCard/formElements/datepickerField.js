import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB)

export const DatePickerField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  field.value = new Date(props.deadline);

  return (
    <div className="deadline">
      <label className="label" htmlFor={props.id || props.name}>{label}</label>
      <span className="date">
        <DatePicker
          {...field}
          {...props}
          locale="en-GB"
          dateFormat="MMMM d, yyyy"
          selected={new Date(field.value)}
          onChange={val => setFieldValue(field.name, val)}
          minDate={new Date()}
        />
      </span>
    </div>
  );
};