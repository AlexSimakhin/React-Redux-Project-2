import React, {useEffect} from 'react';
import {useField} from 'formik';
import { Checklist } from './checklist';

export const MyChecklist = ({ label, checklist, setFieldValue, ...props }) => {
  const [field] = useField({ ...props });
  
  useEffect(() => {
    setFieldValue(props.name, checklist);
  }, [props.name, setFieldValue, checklist]);

  return (
    <div className="checklist">
      <label className="label" htmlFor={props.id || props.name}>{label}</label>

      <div className="sub-tasks">
        
        <Checklist value={field.value} />

        <div className="sub-task" key={'add-more'}>
          <input type="text" placeholder="Add more" />
        </div>

      </div>
    </div>
  )
};