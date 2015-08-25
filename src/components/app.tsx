import * as React from 'react';
import {Link, RouteHandler} from 'react-router';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1><Link to="app">React server-side rendering sample</Link></h1>
        <p><Link to="aaa">aaa</Link></p>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}
