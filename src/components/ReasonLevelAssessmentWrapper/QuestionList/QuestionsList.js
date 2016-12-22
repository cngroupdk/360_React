import React, { Component } from 'react';

import { QuestionsSectionName } from '../../common/assets/styles/QuestionsPage/QuestionsSectionName';
import QuestionSlider from './QuestionSlider';
import QuestionGeneral from './QuestionGeneral';

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
          if (question.get('Type') === 'Open'){
            return  (<QuestionGeneral key={question.get('Id')}
                                      question={question}
                                      skillId={skill.get('Id')}
                                      updateAnswer={updateAnswer}/>)
          }

          return (<QuestionSlider key={question.get('Id')}
                                  question={question}
                                  skillId={skill.get('Id')}
                                  updateAnswer={updateAnswer}/>)
        })}
      </div>
    );
  }
}
