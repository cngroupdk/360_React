import React from 'react';
import { Link } from 'react-router'
import monthRender from '../common/monthRender'
import getPhotoUrl from '../common/getPhotoUrl'
import buttonType from '../common/buttonType'

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';

export const PeopleListPerson = ({person}) => (
        <PersonRow>
            <PersonColumn fluid sm={1}>
                <StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/>
            </PersonColumn>
            <PersonColumn fluid sm={2.5}>{person.Name}</PersonColumn>
            <PersonColumn fluid sm={1.5}>{person.Department}</PersonColumn>
            <PersonColumn fluid sm={2}>{person.Position}</PersonColumn>
            <PersonColumn fluid sm={2}>{monthRender(person.AssessmentMonth)}</PersonColumn>
            <PersonColumn fluid sm={3}><StyledButton> <Link to="/levelentry">{buttonType(person.ExistingDraft)}</Link></StyledButton></PersonColumn>
        </PersonRow>
);
