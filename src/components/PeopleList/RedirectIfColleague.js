import React, { Component } from 'react';
import { Link } from 'react-router';

import buttonType from '../common/buttonType';

export default class RedirectIfColleague extends Component {

    render() {
        const {
            person,
            isColleague,
        } = this.props;

        return (
            {isColleague} ? <Link to={{pathname: '/level-entry', query: { name: person.Name}}}>{buttonType(person.ExistingDraft)}</Link>:
                <Link to={{pathname: '/reason-entry', query: { name: person.Name}}}>{buttonType(person.ExistingDraft)}</Link>
        );
    }
}