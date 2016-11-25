import React from 'react';
import { Link } from 'react-router'

import buttonType from '../common/buttonType'

const RedirectIfColleague = (ifColleague, person) => {
    if (ifColleague) {
        return <Link to="/level-entry">{buttonType(person.ExistingDraft)}</Link>
}
    else {
        return <Link to="/reason-entry">{buttonType(person.ExistingDraft)}</Link>
}
};

export default RedirectIfColleague;