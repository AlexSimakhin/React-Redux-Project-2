import { useState } from 'react';

export const ChecklistItem = ({ name, value, adtValues, handleChange, formikValues }) => {
  const [isChecked, setChecked] = useState(adtValues.completed[name]);

  const _onclickSetChecked = () => {
    isChecked ? setChecked(false) : setChecked(true);
  };

  return (
    <div className={`sub-task`} hash={1} >
      <button type="button" className={`${isChecked ? 'completed' : 'incompleted'}`} onClick={_onclickSetChecked} />
      <input type="text" name={name} value={value} onChange={handleChange} onBlur={formikValues} />
    </div>
  )
    
};






// import { useState } from 'react';

// export const ChecklistItem = ({ item, index, form, handleChange }) => {
//   const { formValues } = form;
//   const {completed, hash } = item;
//   const [isChecked, setChecked] = useState(completed);

//   console.log(formValues);

//   const _onclickSetChecked = () => {
//     isChecked ? setChecked(false) : setChecked(true);
//   };

//   return (
//     <div className={`sub-task`} hash={hash} >
//       <button type="button" className={`${isChecked ? 'completed' : 'incompleted'}`} onClick={_onclickSetChecked} />
//       <input type="text" name={`subTasks.${index}`} value={formValues[`subTasks.${index}`]} onChange={handleChange} />
//     </div>
//   )
    
// };