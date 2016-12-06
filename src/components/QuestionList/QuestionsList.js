import React, { Component } from 'react';

import { QuestionsSectionName } from '../common/assets/styles/QuestionsPage/QuestionsSectionName';
import Question from './Question';

export default class QuestionsList extends Component {

    render() {
        const {
            questionGroup
        } = this.props;

        return (
            <div>
                <QuestionsSectionName>{questionGroup.Caption}</QuestionsSectionName>

                {questionGroup.Questions.map((question, index) => {
                    return (<Question key={index} question={question} />)
                 })}
            </div>
        );
    }
}