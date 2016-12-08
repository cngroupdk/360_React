import React, { Component } from 'react';

import QuestionsList from './QuestionsList';

export default class QuestionGroups extends Component {

    render() {
        const {
            allQuestions,
            updateAnswerDontSay,
        } = this.props;

        return (
            <div className="clear">
                {allQuestions.get('Skills').map((questionGroup) => (
                    <QuestionsList
                        key={questionGroup.get('Id')}
                        questionGroup={questionGroup}
                        updateAnswerDontSay={updateAnswerDontSay}
                    />
                ))}
            </div>
        );
    }
}