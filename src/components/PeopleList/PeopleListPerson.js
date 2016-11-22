import React from 'react';
import { Link } from 'react-router'
import monthRender from '../common/monthRender'
import buttonType from '../common/buttonType'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';

export const PeopleListPerson = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>&nbsp;</PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.Name}</PersonColumn>
            <PersonColumn fluid sm={1.5}>{person.Department}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.Position}</PersonColumn>
            <PersonColumn fluid sm={2}>{monthRender(person.AssessmentMonth)}</PersonColumn>
            <PersonColumn fluid sm={3}><StyledButton> <Link to="/levelentry">{buttonType(person.ExistingDraft)}</Link></StyledButton></PersonColumn>
        </PersonRow>
);
