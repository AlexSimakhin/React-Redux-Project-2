import React from 'react';
import { Formik, Form } from 'formik';

import { initialValuesFormik } from './initialValuesFormik';
import { validationSchema } from './validationSchema';

import { MyTitleInput } from './formElements/myTitleInput';
import { MyTextarea } from './formElements/myTextarea';
import { MyRadioButton } from './formElements/myRadioButton';
import { MyChecklist } from './formElements/myChecklist/myChecklist';
import { DatePickerField } from './formElements/datepickerField';
import { useIfCompleted } from './hooks/useIfCompleted';

import { api } from '../../../../api';

// const extend = (obj1, obj2) => {
//   for (const key in obj2) {
//     obj1[key] = obj2[key];
//   };
//   return obj1;
// };



export const TaskCard = ({ ifClickedTask, initialValues, resetInitialValues }) => {
  const { title, deadline, tag, hash, description, completed, checklist } = initialValues;
  const { ifCompleted, _onclickSetCompleted } = useIfCompleted(completed);

  const createTask = async (values) => {
    const objReq = values;

    if (ifClickedTask) {
      const date = new Date(values['deadline']);
      date.setMilliseconds(0.05 * 60 * 60 * 1000);

      // extendAll(objReq, values);

      // objReq.deadline = date.toISOString();
      objReq.completed = ifCompleted;
      objReq.hash = String(hash);
    }

    console.log('Submit:', objReq);

    const response = await api.createTodos.fetch(objReq);

    if (response.status === 201) {
      const { data } = await response.json();
      console.log(data);
    } else {
      const error = {
        status: response.status,
      };
      console.log(error);
    }

    document.location.reload();
  };

  const deleteTask = async () => {
    const response = await api.removeTodoByHash.fetch(hash);

    if (response.status === 204) {
      console.log('Удалено');
    } else {
      const error = {
        status: response.status,
      };
      console.log(error);
    }

    // document.location.reload();
  };

  const errorsJSX = (errors) => {
    let errorJSX = [];
    
    for (const key in errors) {
      errorJSX.push(<p className="errorMessage" key={errors[key]}>{errors[key]}</p>)
    }

    return errorJSX.length !== 0 ? (
      <div className="errors">{errorJSX}</div>
    ) : null;
  };

  // const touchedFormInputs = (touched) => {
  //   let touchedArr = [];
    
  //   for (const key in touched) {
  //     touchedArr.push(key);
  //   }

  //   return touchedArr.length;
  // };

  return (
    <div className="task-card">
      
      <div className="head">
        <button className={`button-complete-task ${ifCompleted ? 'completed' : ''}`} onClick={_onclickSetCompleted}>Mark as complete</button>
        {ifClickedTask && <button className="button-remove-task" onClick={deleteTask} />}
      </div>
      
      <Formik
        initialValues={initialValuesFormik}
        validationSchema={validationSchema}
        onSubmit={createTask}
      >
        

        {props => (
          <Form className="content">
            
            <MyTitleInput
              type="text"
              name="title"
              placeholder="Task title"
              title={title}
              setFieldValue={props.setFieldValue}
            />
          
            <DatePickerField
              label="Due to"
              name="deadline"
              deadline={deadline}
              setFieldValue={props.setFieldValue}
            />
          
            <MyTextarea
              label="Description"
              type="text"
              name="description"
              placeholder="Describe your event"
              description={description}
              setFieldValue={props.setFieldValue}
            />
          
            <MyChecklist
              label="Checklist (Work in Progress)"
              type="text"
              name="checklist"
              checklist={checklist}
              ifClickedTask={ifClickedTask}
              setFieldValue={props.setFieldValue}
            />

            <MyRadioButton
              type="radio"
              name="tag"
              options={["Sketch", "Spotify", "Dribble", "Behance", "UX"]}
              tag={tag}
              setFieldValue={props.setFieldValue}
            />
            
            {errorsJSX(props.errors)}
                   
            <div className="form-controls">
              <button className="button-reset-task" type="reset">Reset</button>
              <button className="button-save-task" type="submit">Save</button>
            </div>
          </Form>
        )}

      </Formik>
    </div>
  );
}




// <div className="form-controls">
//               <button className="button-reset-task" type="reset" disabled={touchedFormInputs(props.touched) > 0 ? false : true}>Reset</button>
//               <button className="button-save-task" type="submit" disabled={touchedFormInputs(props.touched) > 0 && errorsJSX(props.errors) === null ? false : true}>Save</button>
//             </div>