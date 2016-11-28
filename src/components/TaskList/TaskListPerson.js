import React from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import buttonType from '../common/buttonType';
import getPhotoUrl from '../common/getPhotoUrl';

import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';
import {StyledProfilePhoto} from '../common/assets/styles/StyledProfilePhoto';
import {Content} from '../common/assets/styles/Content';

export const TaskListPerson = ({person}) => (
    <PersonRow>
        <PersonColumn fluid sm={1}>
            <Content><LazyLoad height={50}><StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/></LazyLoad></Content>
        </PersonColumn>
        <PersonColumn fluid sm={3}><Content>{person.Name}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={1.5}><Content>{person.Department}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={2}><Content>{person.Position}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={1.5}><Content>{monthRender(person.AssessmentMonth)}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={3}>
            <StyledButton> <Link to="/level-entry">{buttonType(person.ExistingDraft)}</Link></StyledButton>
        </PersonColumn>
    </PersonRow>
);
