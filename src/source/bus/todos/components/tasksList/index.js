import { format } from 'date-fns';
import React from 'react';

const TagNameToClass = {
  'Sketch': 'first',
  'Spotify': 'second',
  'Dribble': 'third',
  'Behance': 'fourth',
  'UX': 'fifth',
}

export const TasksList = ({ _onclickSetClickedTask, data, setInitialValues }) => {

  const _onclickEvent = (title, deadline, tag, hash, description, completed, checklist) => {
    _onclickSetClickedTask();

    setInitialValues({
      title: title,
      deadline: new Date(deadline),
      description: description,
      checklist: checklist,
      tag: tag,
      hash: hash,
      completed: completed,
    });
  };


  const taskListJSX = data && data.map(({ title, deadline, tag, hash, description, completed, checklist }) => {
    return (
      <div className="task" onClick={() => { _onclickEvent(title, deadline, tag, hash, description, completed, checklist) }} data-hash={hash} key={hash}>
        <span className="title">{title}</span>
        <div className="meta">
          <span className="deadline">{format(new Date(deadline), 'MMMM d, yyyy')}</span>
          <span className={`tag ${TagNameToClass[tag]}`}>{tag}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="list">
      <div className="tasks">
        {taskListJSX}
      </div>
    </div>
  );
};