import React, { Component } from 'react';

import { QuestionsSectionName } from '../../common/assets/styles/QuestionsPage/QuestionsSectionName';
import QuestionSlider from './QuestionSlider/QuestionSlider';
import QuestionGeneral from './QuestionGeneral/QuestionGeneral';

export default class QuestionsList extends Component {

  componentDidUpdate() {
    const {
      skill,
      submitValidation,
    } = this.props;

    skill.get('Questions').map((question) => {
      if (question.get('Type') === 'Open'){
        submitValidation(!!question.get('Answer').get('Note'));
      }
      return null
    })
  }

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
