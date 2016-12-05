import React, { Component, PropTypes } from 'react';
import { StyledLink } from '../common/assets/styles/StyledLink';
import buttonText from '../common/buttonText';

export default class RedirectIfColleague extends Component {

    constructor(props, context) {
        super(props, context);
        this.gotoNextLinkPath = this.gotoNextLinkPath.bind(this);
    };

    static contextTypes = {
        router: PropTypes.object
    };

    gotoNextLinkPath(event) {
        event.preventDefault();
        let nextPath = this.props.person.Colleague ? '/level-entry' : '/reason-entry';
        let nextPathWithData = {
            pathname: nextPath,
            query: { name: this.props.person.Name}
        };
        this.context.router.push(nextPathWithData);

    };

    render() {
        const {
            isHidden,
            person,
        } = this.props;

        return (
            <StyledLink data-xyAlign hidden={isHidden} onClick={this.gotoNextLinkPath} to="#">
                {buttonText(person.ExistingDraft)}
            </StyledLink>
        );
    }
}