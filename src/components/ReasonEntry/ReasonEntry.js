import React, { Component } from 'react';

import getPhotoUrl from '../../lib/getPhotoUrl';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { StyledReasonEnterArea } from '../common/assets/styles/ReasonPage/StyledReasonEnterArea';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { PeopleProfileHeader, ProfileDescriptionWrapper, ProfilePhotoWrapper }
  from '../common/assets/styles/QuestionsPage/PeopleProfileHeader';
import { StyledReasonEnterAreaWrapper } from '../common/assets/styles/ReasonPage/StyledReasonEnterAreaWrapper';

export default class ReasonEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {reason: ''};
    this.handleReasonEnter = this.handleReasonEnter.bind(this);
  }

  handleReasonEnter(e) {
    this.setState({
      reason: e.target.value
    });
    this.props.sendReason(e.target.value, this.props.personId)
  }

  render() {

    const {
      person,
      nextStep,
      personId,
    } = this.props;

    const pathNameNextStep = {
      pathname: '/' + nextStep.toLowerCase(),
      query: {personId}
    };

    return (
      <ContentContainer>
        <h1>Warning! {person.Name} is not your co-worker.</h1>
        <PeopleProfileHeader>
          <ProfilePhotoWrapper>
            <StyledProfilePhoto radius='120px' imgUrl={getPhotoUrl(person.Login)}/>
          </ProfilePhotoWrapper>
          <ProfileDescriptionWrapper>
            <h2>{person.Name}</h2>
            Position: {person.Position}<br/>
            Department: {person.Department}
          </ProfileDescriptionWrapper>
        </PeopleProfileHeader>

        <StyledReasonEnterAreaWrapper>
          <StyledReasonEnterArea
            autoFocus
            placeholder="Please enter your reason here..."
            onChange={this.handleReasonEnter}
          />
          <label>*reason is required (min. 10 characters)</label>
        </StyledReasonEnterAreaWrapper>

        <StyledLink disabled={this.state.reason.length < 10} to={pathNameNextStep}>
          Proceed further
        </StyledLink>
      </ContentContainer>
    )
  }
}
