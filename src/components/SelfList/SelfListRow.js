import React from 'react';
import monthRender from '../common/monthRender'
import { Link } from 'react-router'
import buttonType from '../common/buttonType'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';

import { StyledButton } from '../common/assets/styles/StyledButton';

export const SelfListRow = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>&nbsp;</PersonColumn>
            <PersonColumn fluid sm={3}>{person.PersonName}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.Department}</PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.JobCategory}</PersonColumn>
            <PersonColumn fluid sm={2.5}>{monthRender(person.AssessmentMonth)}</PersonColumn>
            <PersonColumn fluid sm={1}><StyledButton> <Link to="/levelentry">Edit draft</Link></StyledButton></PersonColumn>
        </PersonRow>
);
