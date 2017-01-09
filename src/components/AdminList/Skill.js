import React, { Component } from 'react';

import Question from './Question'

import { ContentHeader} from '../common/assets/styles/ContentHeader';

export default class Skill extends Component {
  render() {
    const {
      skill
    } = this.props;

    return (
      <div>
        <ContentHeader>{skill.get('Caption')}</ContentHeader>
        {skill.get('Questions').map((question) => (
          <Question question={question} key={question.get('Id')} />
        ))}
      </div>
    );
  }
}
