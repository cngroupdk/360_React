import React from 'react';
import { Link } from 'react-router'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';

export const SelfListRow = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>&nbsp;</PersonColumn>
            <PersonColumn fluid sm={3}>{person.PersonName}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.Department}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.JobCategory}</PersonColumn>
            <PersonColumn fluid sm={2.5}>None listed</PersonColumn>
            <PersonColumn fluid sm={1.5}><StyledButton> <Link to="/level-entry">Edit draft</Link></StyledButton></PersonColumn>
        </PersonRow>
);

