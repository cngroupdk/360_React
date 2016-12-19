import React, { Component } from 'react';

import { QuestionsSectionName } from '../common/assets/styles/QuestionsPage/QuestionsSectionName';
import Question from './Question';

const OtherQuestion = ({ skillId }) => (
  <div>OtherQuestion: {skillId}</div>
);

const NotFoundQuestion = () => (
  <div>Not Found Question</div>
)

const QUESTION_COMPONENT_BASED_ON_TYPE = {
  'slider': Question,
  'other': OtherQuestion,
};

export default class QuestionsList extends Component {

    render() {
        const {
            skill,
            updateAnswer,
        } = this.props;

        return (
            <div>
                <QuestionsSectionName>{skill.get('Caption')}</QuestionsSectionName>

                {skill.get('Questions').map((question, index) => {
                    const type = index % 2 ? 'other' : 'slider';
                    const TheComponent  = QUESTION_COMPONENT_BASED_ON_TYPE[type];

                    return (
                      <TheComponent
                        key={index}
                        question={question}
                        skillId={skill.get('Id')}
                        updateAnswer={updateAnswer}
                      />
                    );
                 })}
            </div>
        );
    }
}
