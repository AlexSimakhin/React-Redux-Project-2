
import { ChecklistItem } from './checklistItem';

export const Checklist = ({ value }) => {
  const checklistJSX = value.map((item, index) => <ChecklistItem key={String(item.hash)} item={item} index={index} />);

  return (
    <>
      {checklistJSX}
    </>
  )
};