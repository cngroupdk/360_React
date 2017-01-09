import React, { Component } from 'react';

export default class Level extends Component {
  render() {
    const {
      level
    } = this.props;

    return (
      <div>
        <h1>{level.get('Caption')}</h1>
      </div>
    );
  }
}
