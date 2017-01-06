import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader';

import { selectors } from '../../selectors';
import { loaderOptions } from '../../appConfig'

import {
  whoIs,
  getNextStep,
} from '../../components/ReasonLevelAssessmentWrapper/ReasonLevelAssessmentPageActions';

import ReasonLevelAssessmentWrapper from '../../components/ReasonLevelAssessmentWrapper/ReasonLevelAssessmentWrapper'

class ReasonLevelAssessmentPage extends Component {
  componentWillMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.getNextStep(this.props.location.pathname.split('/')[2]);
  }

  render() {
    const personId = this.props.location.pathname.split('/')[2];

    const {
      whoIs,
      person,
      step,
      stepIsLoaded,
      getNextStep,
    } = this.props;

    return (
      <Loader loaded={stepIsLoaded} options={loaderOptions}>
        <ReasonLevelAssessmentWrapper
          personId={personId}
          whoIs={whoIs}
          person={person}
          step={step}
          getNextStep={getNextStep}
        />
      </Loader>
    )
  }
}

function mapStateToProps(state) {
  const {
    getPerson,
    getStep,
    stepIsLoaded,
  } = selectors.reasonLevelAssessmentPage;

  return {
    person: getPerson(state),
    step: getStep(state),
    stepIsLoaded: stepIsLoaded(state),
  };
}

export default connect(
  mapStateToProps,
  {whoIs, getNextStep},
)(ReasonLevelAssessmentPage);
