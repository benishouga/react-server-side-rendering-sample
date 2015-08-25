import * as React from 'react';
import {Link, RouteHandler} from 'react-router';

export default class Top extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Top</h1>
        <p><Link to="aaa">aaa</Link></p>
      </div>
    );
  }
}
