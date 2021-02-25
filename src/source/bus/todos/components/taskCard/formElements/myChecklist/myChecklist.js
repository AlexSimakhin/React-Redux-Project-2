import React, {useEffect} from 'react';
import {useField} from 'formik';
// import { ChecklistItem } from './checklistItem';
// import { useForm } from './useForm';
import { Checklist } from './checklist';

export const MyChecklist = ({ label, checklist, ifClickedTask, setFieldValue, ...props }) => {
  const [field] = useField({ ...props });
  
  useEffect(() => {
    setFieldValue(props.name, checklist);
  }, [props.name, setFieldValue, checklist]);

  return (
    <div className="checklist">
      <label className="label" htmlFor={props.id || props.name}>{label}</label>

      <div className="sub-tasks">
        
        <Checklist field={field} checklist={checklist} ifClickedTask={ifClickedTask} setFieldValue={setFieldValue} />

      </div>
    </div>
  )
};



//  <div className="sub-task" key={'add-more'}>
//           <input type="text" placeholder="Add more" />
//         </div>