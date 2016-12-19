import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Tabs extends Component {
  render() {
    return (
      <div>
        <IndexLink to="/" className='tab' activeClassName='active'>Tasks and History</IndexLink>
        <Link to="/people" className='tab' activeClassName='active'>People</Link>
        <Link to="/self" className='tab' activeClassName='active'>Self assessment</Link>
      </div>
    );
  }
}
