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

import { getNextStep } from '../components/ReasonLevelAssessmentWrapper/ReasonLevelAssessmentPageActions';
import { declineModal, openModal } from '../components/Confirmation/ConfrimationModalAction';

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

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.changeLevel = this.changeLevel.bind(this);
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
    this.props.declineModal();
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

  changeLevel() {
    this.props.openModal();
  }

  handleResetLevel() {
    const { getNextStep, personId, resetLevel, router } = this.props;

    resetLevel(personId, router, getNextStep);
  }

  fetchAllData() {
    this.props.fetchAssessment(this.props.personId);
    this.props.whoIs(this.props.personId);
  }

  handleSaveAsDraft() {
    this.props.saveAssessment(this.props.person.get('Id'), false, this.context.router);
  }

  handleSubmitAssessment() {
    this.props.saveAssessment(this.props.person.get('Id'), true, this.context.router);
  }

  render() {
    const {
      assessment,
      assessmentIsLoaded,
      assessmentUpdateAnswer,
      checkIfSubmittable,
      isSubmittable,
      modalIsProceeded,
      person,
    } = this.props;

    const chosenLevel = (assessment) ? assessment.get('Caption') : 'Default';

    if (modalIsProceeded) {
      this.handleResetLevel();
    }

    return (
      <Loader loaded={assessmentIsLoaded} options={loaderOptions}>
        <ContentContainer>
          <h1>Assessment</h1>
          <AssessmentPeopleProfileHeader person={person}>
            <StyledLinkWrapper data-right-align>
              <StyledLink data-right-align onClick={this.changeLevel}>
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
            <StyledLink onClick={this.handleSaveAsDraft}>Save draft</StyledLink>
          </StyledLinkWrapper>
          <StyledLink disabled={!isSubmittable} onClick={this.handleSubmitAssessment}>Submit</StyledLink>
        </ContentContainer>
      </Loader>
    )
  }
}

function mapStateToProps(state) {
  const { modalIsProceeded } = selectors.confirmationModal;

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
    modalIsProceeded: modalIsProceeded(state),
  };
}

export default connect(
  mapStateToProps,
  {
    assessmentUpdateAnswer,
    checkIfSubmittable,
    declineModal,
    fetchAssessment,
    getNextStep,
    openModal,
    resetLevel,
    saveAssessment,
  },
)(AssessmentPage);

