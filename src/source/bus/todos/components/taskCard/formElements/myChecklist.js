import React from 'react';
import {useField} from 'formik';

export const MyChecklist = ({ label, ...props }) => {
  const [field] = useField({ ...props });

  const checklistJSX = (
    <>
      <div className="sub-tasks" {...field} {...props}>
        <div className="sub-task completed">
          <input type="text" value="Design new home page" />
        </div>
        <div className="sub-task incompleted">
          <input type="text" value="Send design samples to the customer" />
        </div>
        <div className="sub-task">
          <input type="text" placeholder="Add more" />
        </div>
      </div>
    </>
  );

  return (
    <div className="checklist">
      <label className="label" htmlFor= {props.id || props.name}>{label}</label>
      {checklistJSX}
    </div>
  )
};


// <div className="checklist">
//   <span className="label">Checklist</span>
//   <div className="sub-tasks">
//     <div className="sub-task completed">
//       <input type="text" value="Design new home page" />
//     </div>
//     <div className="sub-task incompleted">
//       <input type="text" value="Send design samples to the customer" />
//     </div>
//     <div className="sub-task">
//       <input type="text" placeholder="Add more" />
//     </div>
//   </div>
// </div>
