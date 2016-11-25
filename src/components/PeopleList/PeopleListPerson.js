import React from 'react';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';
import RedirectIfColleague from './RedirectIfColleague';


import {PersonRow, PersonColumn} from '../common/assets/styles/PersonRow';
import {StyledButton} from '../common/assets/styles/StyledButton';
import {StyledProfilePhoto} from '../common/assets/styles/StyledProfilePhoto';
import {Content} from '../common/assets/styles/Content';

export const PeopleListPerson = ({person, checkIfColleague, isColleague}) => (
    <PersonRow>
        <PersonColumn fluid sm={1}>
            <Content><LazyLoad height={50}><StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/></LazyLoad></Content>
        </PersonColumn>
        <PersonColumn fluid sm={2.5}>
            <Content>{person.Name}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={1.5}>
            <Content>{person.Department}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={2}>
            <Content>{person.Position}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={2}>
            <Content>{monthRender(person.AssessmentMonth)}</Content>
        </PersonColumn>
        <PersonColumn fluid sm={3}>
            <StyledButton onClick={() => checkIfColleague(person.Login)}>
                <RedirectIfColleague isColleague={isColleague} person={person}/>
            </StyledButton>
        </PersonColumn>
    </PersonRow>
);
