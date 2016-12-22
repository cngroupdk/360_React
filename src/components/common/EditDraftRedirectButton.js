import React, { Component } from 'react';

import buttonText from './buttonNewEdit';

import { StyledLinkWrapper } from './assets/styles/StyledLinkWrapper';
import { StyledLink } from './assets/styles/StyledLink';

export default class EditDraftRedirectButton extends Component {
  render() {
    const {
      person,
    } = this.props;

    return (
      <StyledLinkWrapper data-vertical-align>
        <StyledLink onClick={this.gotoNextLinkPath} to={{
          pathname: '/assessment/' + person.get('SubjectId')
        }}>
          {buttonText(person.get('ExistingDraft'))}
        </StyledLink>
      </StyledLinkWrapper>
    );
  }
}
