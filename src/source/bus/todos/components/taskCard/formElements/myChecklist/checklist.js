// import { useEffect } from 'react';
import { ChecklistItem } from './checklistItem';
import { useForm } from './useForm';


export const Checklist = ({ field, checklist, ifClickedTask, setFieldValue }) => {
  const { form, handleChange, formikValues, ifCompletedValues, setIfCompletedValues } = useForm({ field, checklist, ifClickedTask, setFieldValue });

  const checklistJSX = [];

  for (const value in form) {
    checklistJSX.push(<ChecklistItem key={String(value)} name={value} value={form[value]} handleChange={handleChange} formikValues={formikValues} ifCompletedValues={ifCompletedValues} setIfCompletedValues={setIfCompletedValues} />)
  }

  return (
    <>        
      {checklistJSX}
    </>
  )
};