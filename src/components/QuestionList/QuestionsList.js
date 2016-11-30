import React, { Component } from 'react';

import QuestionsListQuestion from './QuestionsListQuestion';

import { ContentContainer} from '../common/assets/styles/ContentContainer';

export default class QuestionsList extends Component {

    render() {
        const {
            questions
        } = this.props;

        return (
            <ContentContainer>

                {questions.map((question, index) => {
                    return (
                        <QuestionsListQuestion question={question} key={index}/>
                    )
                })}
            </ContentContainer>
        );
    }
}