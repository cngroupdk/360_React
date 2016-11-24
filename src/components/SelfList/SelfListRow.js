import React from 'react';
import { Link } from 'react-router'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';
import {Content} from '../common/assets/styles/Content';

export const SelfListRow = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}><Content>&nbsp;</Content></PersonColumn>
            <PersonColumn fluid sm={3}><Content>{person.PersonName}</Content></PersonColumn>
            <PersonColumn fluid sm={2}><Content>{person.Department}</Content></PersonColumn>
            <PersonColumn fluid sm={2}><Content>{person.JobCategory}</Content></PersonColumn>
            <PersonColumn fluid sm={2}><Content>None listed</Content></PersonColumn>
            <PersonColumn fluid sm={2}>
              <StyledButton> <Link to="/level-entry">Edit draft</Link></StyledButton>
            </PersonColumn>
        </PersonRow>
);