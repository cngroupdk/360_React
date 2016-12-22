import React, { Component } from 'react';

import { QuestionsSectionName } from '../../common/assets/styles/QuestionsPage/QuestionsSectionName';
import Question from './Question';

export default class QuestionsList extends Component {
  render() {
    const {
      skill,
      updateAnswer,
    } = this.props;

    return (
      <div>
        <QuestionsSectionName>{skill.get('Caption')}</QuestionsSectionName>

        {skill.get('Questions').map((question) => {
          return (<Question key={question.get('Id')}
                            question={question}
                            skillId={skill.get('Id')}
                            updateAnswer={updateAnswer}/>)
        })}
      </div>
    );
  }
}
