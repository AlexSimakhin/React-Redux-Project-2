// import { useEffect } from 'react';
import { ChecklistItem } from './checklistItem';
import { useForm } from './useForm';


export const Checklist = ({ field, checklist, ifClickedTask, setFieldValue }) => {
  const { form, handleChange, adtValues, formikValues } = useForm({ field, checklist, ifClickedTask, setFieldValue });

  const checklistJSX = [];

  for (const value in form) {
    checklistJSX.push(<ChecklistItem key={String(value)} name={value} value={form[value]} adtValues={adtValues} handleChange={handleChange} formikValues={formikValues} />)
  }

  return (
    <>        
      {checklistJSX}
    </>
  )
};