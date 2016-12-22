import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import SkillsList from '../../components/ReasonLevelAssessmentWrapper/QuestionList/SkillsList';

import { selectors } from '../../selectors';

import {
  fetchAssessment,
  saveAssessment,
  assessmentUpdateAnswer,
  assessmentUpdateSubmitted,
  resetLevel,
} from '../../components/ReasonLevelAssessmentWrapper/QuestionList/AssessmentPageActions';

import {
  getNextStep,
} from '../../components/ReasonLevelAssessmentWrapper/ReasonLevelAssessmentPageActions';

import { ContentContainer } from '../../components/common/assets/styles/ContentContainer';
import { StyledLinkWrapper } from '../../components/common/assets/styles/StyledLinkWrapper';
import { StyledLink } from '../../components/common/assets/styles/StyledLink';
import { AssessmentPeopleProfileHeader } from '../../components/common/AssessmentPeopleProfileHeader';

class AssessmentPage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchAssessment: PropTypes.func.isRequired,
    saveAssessment: PropTypes.func.isRequired,
    assessmentUpdateAnswer: PropTypes.func.isRequired,
    assessmentUpdateSubmitted: PropTypes.func.isRequired,
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
    this.props.saveAssessment();
  }

  handleSubmitAssessment() {
    this.props.assessmentUpdateSubmitted(true);
    this.props.saveAssessment();
  }

  render() {
    const {
      assessment,
      assessmentUpdateAnswer,
      levelsIsLoaded,
      person,
    } = this.props;

    return (
      <Loader loaded={levelsIsLoaded}>
        <ContentContainer>
          <h1>Assessment</h1>

          <AssessmentPeopleProfileHeader person={person}>
            <StyledLinkWrapper data-right-align>
              <StyledLink data-right-align onClick={this.handleResetLevel} to={'/assessment/' + person.get('Id')}>
                Change selected level
              </StyledLink>
            </StyledLinkWrapper>
          </AssessmentPeopleProfileHeader>

          <SkillsList assessment={assessment} updateAnswer={assessmentUpdateAnswer}/>
          <StyledLinkWrapper data-margin-right-30>
            <StyledLink onClick={this.handleSaveAsDraft} to="/">Save draft</StyledLink>
          </StyledLinkWrapper>
          <StyledLink onClick={this.handleSubmitAssessment} to="/">Submit</StyledLink>
        </ContentContainer>
      </Loader>
    )
  }
}

function mapStateToProps(state) {
  const {
    getAssessment,
    assessmentIsLoaded,
    assessmentIsError
  } = selectors.assessmentPage;

  return {
    assessment: getAssessment(state),
    levelsIsLoaded: assessmentIsLoaded(state),
    levelsIsError: assessmentIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {fetchAssessment, saveAssessment, assessmentUpdateAnswer, assessmentUpdateSubmitted, resetLevel, getNextStep},
)(AssessmentPage);

