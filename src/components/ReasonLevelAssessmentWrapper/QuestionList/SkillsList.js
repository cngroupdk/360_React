import React, { Component } from 'react';

import QuestionsList from './QuestionsList';

export default class SkillsList extends Component {

  componentDidMount() {
    this.props.checkIfSubmittable()
  }

  render() {
    const {
      assessment,
      updateAnswer,
      checkIfSubmittable,
    } = this.props;

    return (
      <div className="clear">
        {assessment.get('Skills').map((skill) => (
          <QuestionsList
            key={skill.get('Id')}
            skill={skill}
            updateAnswer={updateAnswer}
            checkIfSubmittable={checkIfSubmittable}
          />
        ))}
      </div>
    );
  }
}
