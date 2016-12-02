import React, { Component, PropTypes } from 'react';
import { StyledLink } from '../common/assets/styles/StyledLink';
import buttonText from '../common/buttonText';

export default class RedirectIfColleague extends Component {

    constructor(props, context) {
        super(props, context);
        this.gotoNextLinkPath = this.gotoNextLinkPath.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    };

    // ask for `router` from context
    static contextTypes = {
        router: PropTypes.object
    };

    gotoNextLinkPath(isColleague) {
        let nextPath = isColleague ? '/level-entry' : '/reason-entry';
        let nextPathWithData = {
            pathname: nextPath,
            query: { name: this.props.person.Name}
        };
        this.context.router.push(nextPathWithData);
    };

    handleOnClick(event) {
        this.props.checkIfColleague(this.props.person.Login, this.gotoNextLinkPath);
        event.preventDefault();
    }

    render() {
        const {
            isHidden,
            person,
        } = this.props;

        return (
            <StyledLink data-xyAlign hidden={isHidden} onClick={this.handleOnClick} to="#">
                {buttonText(person.ExistingDraft)}
            </StyledLink>
        );
    }
}