import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import SkillsList from '../components/QuestionList/SkillsList';

import { selectors } from '../selectors';
import { loaderOptions } from '../appConfig'

import {
  fetchAssessment,
  saveAssessment,
  assessmentUpdateAnswer,
  resetLevel,
  checkIfSubmittable,
} from '../components/QuestionList/AssessmentPageActions';

import {
  getNextStep,
} from '../components/ReasonLevelAssessmentWrapper/ReasonLevelAssessmentPageActions';

import { ContentContainer } from '../components/common/assets/styles/ContentContainer';
import { StyledLinkWrapper } from '../components/common/assets/styles/StyledLinkWrapper';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { AssessmentPeopleProfileHeader } from '../components/common/AssessmentPeopleProfileHeader';

class AssessmentPage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchAssessment: PropTypes.func.isRequired,
    saveAssessment: PropTypes.func.isRequired,
    assessmentUpdateAnswer: PropTypes.func.isRequired,
    whoIs: PropTypes.func.isRequired,
    assessment: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.handleResetLevel = this.handleResetLevel.bind(this);
    this.handleSaveAsDraft = this.handleSaveAsDraft.bind(this);
    this.handleSubmitAssessment = this.handleSubmitAssessment.bind(this);
  }

  componentDidMount() {
    this.fetchAllData();
    window.addEventListener("beforeunload", this.addPromptMessageToWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.addPromptMessageToWindow);
  }

  addPromptMessageToWindow(event) {
    if (!event) event = window.event;
    event.preventDefault();
    const message = "Are you sure you want to leave this page? Changes that you made will be lost.";
    if (event) {
      event.returnValue = message;
    }
    return message;
  }

  handleResetLevel() {
    this.props.resetLevel(this.props.personId);
    this.props.getNextStep(this.props.personId);
  }

  fetchAllData() {
    this.props.fetchAssessment(this.props.personId);
    this.props.whoIs(this.props.personId);
  }

  handleSaveAsDraft() {
    this.props.saveAssessment(this.props.person.get('Id'), false);
  }

  handleSubmitAssessment() {
    this.props.saveAssessment(this.props.person.get('Id'), true);
  }

  render() {
    const {
      assessment,
      assessmentUpdateAnswer,
      assessmentIsLoaded,
      person,
      checkIfSubmittable,
      isSubmittable,
    } = this.props;

    const chosenLevel = (assessment) ? assessment.get('Caption') : 'Default';

    return (
      <Loader loaded={assessmentIsLoaded} options={loaderOptions}>
        <ContentContainer>
          <h1>Assessment</h1>
          <AssessmentPeopleProfileHeader person={person}>
            <StyledLinkWrapper data-right-align>
              <StyledLink data-right-align onClick={this.handleResetLevel} to={'/assessment/' + person.get('Id')}>
                Change selected level<br />({chosenLevel})
              </StyledLink>
            </StyledLinkWrapper>
          </AssessmentPeopleProfileHeader>

          <SkillsList
            assessment={assessment}
            updateAnswer={assessmentUpdateAnswer}
            checkIfSubmittable={checkIfSubmittable}
          />
          <StyledLinkWrapper data-margin-right-30>
            <StyledLink onClick={this.handleSaveAsDraft} to="/">Save draft</StyledLink>
          </StyledLinkWrapper>
          <StyledLink disabled={!isSubmittable} onClick={this.handleSubmitAssessment} to="/">Submit</StyledLink>
        </ContentContainer>
      </Loader>
    )
  }
}

function mapStateToProps(state) {
  const {
    getAssessment,
    assessmentIsLoaded,
    assessmentIsError,
    isSubmittable,
  } = selectors.assessmentPage;

  return {
    isSubmittable: isSubmittable(state),
    assessment: getAssessment(state),
    assessmentIsLoaded: assessmentIsLoaded(state),
    assessmentIsError: assessmentIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {
    fetchAssessment,
    saveAssessment,
    assessmentUpdateAnswer,
    resetLevel,
    getNextStep,
    checkIfSubmittable,
  },
)(AssessmentPage);

