import React, { Component } from 'react';

import ReasonPage from '../../pages/ReasonLevelAssessmentPage/ReasonPage'
import LevelPage from '../../pages/ReasonLevelAssessmentPage/LevelPage'
import AssessmentPage from '../../pages/ReasonLevelAssessmentPage/AssessmentPage'

const QUESTION_COMPONENT_BASED_ON_STEP = {
  'Level': LevelPage,
  'Reason': ReasonPage,
  'Questions': AssessmentPage,
};

export default class ReasonLevelAssessmentWrapper extends Component {
  render() {
    const step = this.props.step.get('Step');
    const TheComponent = QUESTION_COMPONENT_BASED_ON_STEP[step];

    const {
      whoIs,
      person,
      personId,
      getNextStep,
    } = this.props;

    return (
    <TheComponent
      personId={personId}
      whoIs={whoIs}
      person={person}
      getNextStep={getNextStep}
    />
    )
  }
}
