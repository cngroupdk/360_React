import React, { Component, PropTypes } from 'react';
import { StyledLink } from './assets/styles/StyledLink';
import buttonText from './buttonText';

export default class Redirect extends Component {
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
      <StyledLink data-xyAlign className={className} onClick={this.gotoNextLinkPath} to="#">
        {buttonText(person.ExistingDraft)}
      </StyledLink>
    );
  }
}
