import React, { Component } from 'react';

import QuestionsList from './QuestionsList';

export default class QuestionGroups extends Component {

    render() {
        const {
            allQuestions,
            updateAnswer,
        } = this.props;

        return (
            <div className="clear">
                {allQuestions.get('Skills').map((questionGroup) => (
                    <QuestionsList
                        key={questionGroup.get('Id')}
                        questionGroup={questionGroup}
                        updateAnswer={updateAnswer}
                    />
                ))}
            </div>
        );
    }
}