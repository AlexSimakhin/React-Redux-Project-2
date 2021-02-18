import { useTodosFetch } from './useTodosFetch';

export const useTodos = () => {
  const { isFetching, data, error } = useTodosFetch();

  return { isFetching, data, error };
}