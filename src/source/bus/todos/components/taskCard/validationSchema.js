import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().min(3, 'Task title is too short').required('Should be provided'),
  deadline: Yup.date().required('Should be provided'),
  description: Yup.string(),
  checklist: Yup.array().min(1, `Task doesn't contain any sub-tasks`).required('Should be provided'),
  tag: Yup.string().nullable().required('Task tag field is required').oneOf(["Sketch", "Spotify", "Dribble", "Behance", "UX"], 'You should put a tag'),
});
