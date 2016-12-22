import React, { Component } from 'react';
import { StyledLink } from './assets/styles/StyledLink';
import buttonText from './buttonNewEdit';

export default class EditDraftRedirectButton extends Component {
  render() {
    const {
      person,
    } = this.props;

    return (
      <StyledLink data-vertical-align onClick={this.gotoNextLinkPath} to={{
        pathname: '/assessment/' + person.get('SubjectId')}}>
        {buttonText(person.get('ExistingDraft'))}
      </StyledLink>
    );
  }
}
