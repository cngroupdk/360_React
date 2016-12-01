import React, { Component } from 'react';
import { StyledLink } from '../common/assets/styles/StyledLink';
import buttonText from '../common/buttonText';

export default class RedirectIfColleague extends Component {

    constructor(props) {
        super(props);
        this.getNextLinkPath = this.getNextLinkPath.bind(this);
    }

    getNextLinkPath() {
        let pathName = this.props.isColleague ? '/level-entry' : '/reason-entry';

        return {
            pathname: pathName,
            query: { name: this.props.person.Name}
        }
    };

    render() {
        const {
            isHidden,
            person,
        } = this.props;

        return (
            <StyledLink data-xyAlign hidden={isHidden} to={this.getNextLinkPath}>
                {buttonText(person.ExistingDraft)}
            </StyledLink>
        );
    }
}