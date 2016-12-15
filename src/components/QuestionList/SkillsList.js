import React, { Component } from 'react';

import QuestionsList from './QuestionsList';

export default class SkillsList extends Component {

    render() {
        const {
            assessment,
            updateAnswer,
        } = this.props;

        return (
            <div className="clear">
                {assessment.get('Skills').map((skill) => (
                    <QuestionsList
                        key={skill.get('Id')}
                        skill={skill}
                        updateAnswer={updateAnswer}
                    />
                ))}
            </div>
        );
    }
}