import React, { Component } from 'react';

import QuestionsListQuestion from './QuestionsListQuestion';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';

export default class QuestionsList extends Component {

    render() {
        const {
            questions
        } = this.props;

        console.log(questions)

        return (
            <div>
                {questions.map((question, index) => {
                    return (
                        <QuestionsListQuestion question={question} key={index}/>
                    )
                })}
            </div>
        );
    }
}