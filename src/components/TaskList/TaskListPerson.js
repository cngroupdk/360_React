import React from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';

import monthRender from '../common/monthRender';
import buttonType from '../common/buttonType';
import getPhotoUrl from '../common/getPhotoUrl';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';
import {StyledProfilePhoto} from '../common/assets/styles/StyledProfilePhoto';
import {CenteredContent} from '../common/assets/styles/CenteredContent';

export const TaskListPerson = ({person}) => (
    <TableRow>
        <TableCell fluid sm={1}>
            <CenteredContent><LazyLoad height={50}><StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/></LazyLoad></CenteredContent>
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
            <StyledButton xyAlign> <Link to={{pathname: '/level-entry', query: { name: person.Name}}}>{buttonType(person.ExistingDraft)}</Link></StyledButton>
        </TableCell>
    </TableRow>
);
