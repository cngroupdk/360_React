import React from 'react';

import { QuestionsSectionName } from '../common/assets/styles/QuestionsPage/QuestionsSectionName';
import QuestionSlider from './QuestionSlider/QuestionSlider';
import QuestionGeneral from './QuestionGeneral/QuestionGeneral';

const QuestionsList = (props) => {
  const {
    skill,
    updateAnswer,
    checkIfSubmittable,
  } = props;

  return (
    <div>
      <QuestionsSectionName>{skill.get('Caption')}</QuestionsSectionName>
      {skill.get('Questions').map((question) => {
        if (question.get('Type') === 'Open') {
          return (
            <QuestionGeneral
              key={question.get('Id')}
              question={question}
              skillId={skill.get('Id')}
              updateAnswer={updateAnswer}
              checkIfSubmittable={checkIfSubmittable}
            />
          );
        }

        return (
          <QuestionSlider
            key={question.get('Id')}
            question={question}
            skillId={skill.get('Id')}
            updateAnswer={updateAnswer}
          />
        );
      })}
    </div>
  );
}

export default QuestionsList;
