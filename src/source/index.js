import React from 'react';
import { Todos } from './bus/todos';
import { Footer } from './bus/todos/components/footer';

import './styles/index.scss';

export const Source = () => {
  return (
    <>
      <Todos />
      <Footer />
    </>
  )
};
