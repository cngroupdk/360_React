import React from 'react';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import buttonText from '../common/buttonText';
import getPhotoUrl from '../common/getPhotoUrl';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { StyledProfilePhoto } from '../common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../common/assets/styles/StyledProfileInitial';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export const TaskListPerson = ({person}) => (
    <TableRow>
        <TableCell fluid sm={1}>
            <CenteredContent>
                <StyledProfileInitial>
                    <LazyLoad height={50}>
                        <StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/>
                    </LazyLoad>
                </StyledProfileInitial>
            </CenteredContent>
        </TableCell>
        <TableCell fluid sm={3}><CenteredContent>{person.Name}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.5}><CenteredContent>{person.Department}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={2}><CenteredContent>{person.Position}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={1.5}><CenteredContent>{monthRender(person.AssessmentMonth)}</CenteredContent>
        </TableCell>
        <TableCell fluid sm={3}>
            <StyledLink data-xyAlign to={{pathname: '/level-entry', query: { name: person.Name, id:person.Id}}}>
                {buttonText(person.ExistingDraft)}
            </StyledLink>
        </TableCell>
    </TableRow>
);
