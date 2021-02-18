import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { book } from './book';

import { Source } from '../index';

export const Routes = () => (
  <>
    <Switch>
      <Route exact path={book.root}>
        <Source />
      </Route>
    </Switch>
  </>
);