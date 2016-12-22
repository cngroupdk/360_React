import React, { Component, PropTypes } from 'react';

import { ContentContainer} from '../../common/assets/styles/ContentContainer';
import { StyledLink } from '../../common/assets/styles/StyledLink';
import { StyledReasonEnterArea } from '../../common/assets/styles/ReasonPage/StyledReasonEnterArea';
import { AssessmentPeopleProfileHeader } from '../../common/AssessmentPeopleProfileHeader';
import { StyledReasonEnterAreaWrapper } from '../../common/assets/styles/ReasonPage/StyledReasonEnterAreaWrapper';

export default class ReasonEntry extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {reason: ''};
    this.handleReasonEnter = this.handleReasonEnter.bind(this);
    this.handleSendReason = this.handleSendReason.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  handleReasonEnter(e) {
    this.setState({
      reason: e.target.value
    });
  }

  handleSendReason(e) {
    this.props.sendReason(this.state.reason, this.props.personId, this.context.router);
    this.props.getNextStep(this.props.person.Id)
    e.preventDefault();
  }

  render() {
    const {
      person,
      personId,
    } = this.props;

    return (
      <ContentContainer>
        <h1>Warning! {person.Name} is not your co-worker.</h1>

        <AssessmentPeopleProfileHeader person={person}/>

        <StyledReasonEnterAreaWrapper>
          <StyledReasonEnterArea
            autoFocus
            placeholder="Please enter your reason here..."
            onChange={this.handleReasonEnter}
          />
          <label>*reason is required (min. 10 characters)</label>
        </StyledReasonEnterAreaWrapper>

        <StyledLink disabled={this.state.reason.length < 10} onClick={this.handleSendReason}
                    to={{ pathname: '/assessment/' + personId}}>
          Proceed further
        </StyledLink>
      </ContentContainer>
    )
  }
}
