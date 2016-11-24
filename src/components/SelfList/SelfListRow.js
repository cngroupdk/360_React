import React from 'react';
import { Link } from 'react-router'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';

export const SelfListRow = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}><div className='absolute'>&nbsp;</div></PersonColumn>
            <PersonColumn fluid sm={3}><div className='absolute'>{person.PersonName}</div></PersonColumn>
            <PersonColumn fluid sm={2}><div className='absolute'>{person.Department}</div></PersonColumn>
            <PersonColumn fluid sm={2}><div className='absolute'>{person.JobCategory}</div></PersonColumn>
            <PersonColumn fluid sm={2}><div className='absolute'>None listed</div></PersonColumn>
            <PersonColumn fluid sm={2}><div className='absolute'>
              <StyledButton> <Link to="/levelentry">Edit draft</Link></StyledButton></div>
            </PersonColumn>
        </PersonRow>
);