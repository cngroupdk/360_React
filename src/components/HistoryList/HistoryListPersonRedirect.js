import React, { Component } from 'react';
import { StyledLink } from '../common/assets/styles/StyledLink';
import buttonText from '../common/buttonNewEdit';

export default class Redirect extends Component {
  render() {
    const {
      person,
    } = this.props;

    return (
      <StyledLink data-vertical-align onClick={this.gotoNextLinkPath} to={{
        pathname: '/questions',
        query: {personId: person.SubjectId}
      }}>
        {buttonText(person.ExistingDraft)}
      </StyledLink>
    );
  }
}
