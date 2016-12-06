import React, { Component } from 'react';

import QuestionsList from './QuestionsList';

export default class QuestionGroups extends Component {

    render() {
        const {
            allQuestions
        } = this.props;

        return (
            <div className="clear">
                {allQuestions.Skills.map((questionGroup, index) => {
                    return (
                        <QuestionsList key={index} questionGroup={questionGroup}/>
                    )
                })}
            </div>
        );
    }
}