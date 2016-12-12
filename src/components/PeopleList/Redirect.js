import React, { Component, PropTypes } from 'react';
import { StyledLink } from '../common/assets/styles/StyledLink';
import buttonText from '../common/buttonText';


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

        this.context.router.push(getFirstStep(person));

        event.preventDefault();
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