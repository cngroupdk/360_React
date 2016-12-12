import React, { Component } from 'react';

import { QuestionsSectionName } from '../common/assets/styles/QuestionsPage/QuestionsSectionName';
import Question from './Question';

export default class QuestionsList extends Component {

    render() {
        const {
            questionGroup,
            updateAnswer
        } = this.props;

        return (
            <div>
                <QuestionsSectionName>{questionGroup.get('Caption')}</QuestionsSectionName>

                {questionGroup.get('Questions').map((question, index) => {
                    return (<Question key={index}
                                      question={question}
                                      questionGroupId={questionGroup.get('Id')}
                                      updateAnswer={updateAnswer}/>)
                 })}
            </div>
        );
    }
}