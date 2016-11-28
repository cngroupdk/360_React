import React from 'react';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import getPhotoUrl from '../common/getPhotoUrl';
import RedirectIfColleague from './RedirectIfColleague';


import {TableRow, TableCell} from '../common/assets/styles/PersonRow';
import {StyledButton} from '../common/assets/styles/StyledButton';
import {StyledProfilePhoto} from '../common/assets/styles/StyledProfilePhoto';
import {CenteredContent} from '../common/assets/styles/Content';

export const PeopleListPerson = ({person, checkIfColleague, isColleague}) => (
    <TableRow>
        <TableCell fluid sm={1}>
            <CenteredContent><LazyLoad height={50}><StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/></LazyLoad></CenteredContent>
        </TableCell>
        <TableCell fluid sm={2.5}>
            <CenteredContent>{person.Name}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.5}>
            <CenteredContent>{person.Department}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={2}>
            <CenteredContent>{person.Position}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={2}>
            <CenteredContent>{monthRender(person.AssessmentMonth)}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={3}>
            <StyledButton xyAlign onClick={() => checkIfColleague(person.Login)}>
                <RedirectIfColleague isColleague={isColleague} person={person}/>
            </StyledButton>
        </TableCell>
    </TableRow>
);
