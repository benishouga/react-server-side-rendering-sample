import * as React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/app';
import Top from './components/top';
import Aaa from './components/aaa';

export default function() {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="aaa" handler={Aaa} />
      <DefaultRoute handler={Top} />
    </Route>
  );
};
