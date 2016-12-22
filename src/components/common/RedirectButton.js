import React, { Component, PropTypes } from 'react';

import buttonText from './buttonNewEdit';

import { StyledLinkWrapper } from './assets/styles/StyledLinkWrapper';
import { StyledLink } from './assets/styles/StyledLink';

export default class RedirectButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.gotoNextLinkPath = this.gotoNextLinkPath.bind(this);
  };

  static contextTypes = {
    router: PropTypes.object
  };

  gotoNextLinkPath(event) {
    const {
      person,
      getFirstStep,
    } = this.props;

    event.preventDefault();

    getFirstStep(person, this.context.router);
  };

  render() {
    const {
      className,
      person,
    } = this.props;

    return (
      <StyledLinkWrapper data-xyAlign>
        <StyledLink  className={className} onClick={this.gotoNextLinkPath} to="#">
          {buttonText(person.get('ExistingDraft'))}
        </StyledLink>
      </StyledLinkWrapper>
    );
  }
}
