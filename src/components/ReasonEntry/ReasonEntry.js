import React, { Component } from 'react';

import getPhotoUrl from '../../lib/getPhotoUrl';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { ContentHeader} from '../common/assets/styles/ContentHeader';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { StyledTextArea } from '../common/assets/styles/StyledTextArea';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';

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

    return (
      <ContentContainer>
        <ContentHeader>
          Warning! {person.Name}
          &nbsp;
          <StyledProfileInitial>
            <StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/>
          </StyledProfileInitial>
          &nbsp;
          is not your co-worker.
        </ContentHeader>

        <StyledTextArea autoFocus
                        rows="4"
                        cols="50"
                        placeholder="Enter your reason here (min. 10 characters)..."
                        onChange={this.handleReasonEnter}></StyledTextArea>

        <StyledLink disabled={this.state.reason.length < 10}
                    to={{
                      pathname: '/' + nextStep.toLowerCase(),
                      query: {personId}
                    }}>
          Proceed further
        </StyledLink>
      </ContentContainer>
    )
  }
}
