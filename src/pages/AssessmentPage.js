import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import getPhotoUrl from '../lib/getPhotoUrl';

import SkillsList from '../components/QuestionList/SkillsList';

import { ContentContainer } from '../components/common/assets/styles/ContentContainer';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { StyledProfilePhoto } from '../components/common/assets/styles/StyledProfilePhoto';
import { PeopleProfileHeader, ProfileDescriptionWrapper, ProfilePhotoWrapper }
  from '../components/common/assets/styles/QuestionsPage/PeopleProfileHeader';

import {
    fetchAssessment,
    saveAssessment,
    assessmentUpdateAnswer,
    assessmentUpdateSubmitted,
    whoIs,
} from '../components/QuestionList/AssessmentPageActions';

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

  fetchAllData() {
    this.props.fetchAssessment(this.props.location.query.personId);
    this.props.whoIs(this.props.location.query.personId);
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
      isLoaded,
      person,
    } = this.props;

    const pathNameChangeLevels = {
      pathname: '/level',
      query: {personId: person.Id}
    };

    return (
      <Loader loaded={isLoaded}>
        <ContentContainer>
          <h1>Assessment</h1>
          <PeopleProfileHeader>
            <ProfilePhotoWrapper>
              <StyledProfilePhoto radius='120px' imgUrl={getPhotoUrl(person.Login)}/>
            </ProfilePhotoWrapper>
            <ProfileDescriptionWrapper>
              <h2>{person.Name}</h2>
              Position: {person.Position}<br/>
              Department: {person.Department}
            </ProfileDescriptionWrapper>
            <StyledLink data-right-align to={pathNameChangeLevels}>Change selected level</StyledLink>
          </PeopleProfileHeader>

          <SkillsList assessment={assessment} updateAnswer={assessmentUpdateAnswer}/>

          <StyledLink data-margin-right-30 onClick={this.handleSaveAsDraft} to="/">Save draft</StyledLink>
          <StyledLink onClick={this.handleSubmitAssessment} to="/">Submit</StyledLink>
        </ContentContainer>
      </Loader>
    )
  }
}

function mapStateToProps(state) {
  const assessmentPageReducerState = state.get('assessmentPageReducer');

  return {
    assessment: assessmentPageReducerState.get('assessment'),
    person: assessmentPageReducerState.get('person'),
    isLoaded: assessmentPageReducerState.get('isLoaded'),
    isError: assessmentPageReducerState.get('isError'),
  };
}

export default connect(
  mapStateToProps,
  {fetchAssessment, saveAssessment, assessmentUpdateAnswer, assessmentUpdateSubmitted, whoIs},
)(AssessmentPage);
