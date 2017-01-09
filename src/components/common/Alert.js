import React, { Component } from 'react';

export default class Alert extends Component {
  render () {
    const text = (this.props.WhatSubmitted) ? 'Assessment successfully submitted.' : 'Draft successfully saved.';

    return (
      <div className="alert">
        {text}
      </div>
    )
  }
}
