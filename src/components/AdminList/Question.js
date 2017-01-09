import React, { Component } from 'react';

export default class Question extends Component {
  render() {
    const {
      question
    } = this.props;

    return (
      <div>
        {question.get('Caption')} - {question.get('Type')}
      </div>
    );
  }
}
