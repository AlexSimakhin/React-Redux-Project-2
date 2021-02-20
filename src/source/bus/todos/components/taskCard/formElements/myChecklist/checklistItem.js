export const ChecklistItem = ({item}) => {
  const { title, completed, hash } = item;
  
  return (
    <div className={`sub-task ${completed ? 'completed' : 'incompleted'}`} hash={hash} >
      <input type="text" value={`${title}`} />
    </div>
  );
};