import React, { Component } from 'react';

import QuestionsListQuestion from './QuestionsListQuestion';

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