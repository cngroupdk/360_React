import React, { Component } from 'react';
import { StyledLink } from '../common/assets/styles/StyledLink';
import buttonText from '../common/buttonText';

export default class Redirect extends Component {

    render() {
        const {
            person,
        } = this.props;

        return (
            <StyledLink data-vertical-align onClick={this.gotoNextLinkPath} to={{
                pathname: '/questions',
                query: {id: person.Id}
            }}>
                {buttonText(person.ExistingDraft)}
            </StyledLink>
        );
    }
}
