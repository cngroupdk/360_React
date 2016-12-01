import React from 'react';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export const SelfListRow = ({person}) => (
    <TableRow>
        <TableCell fluid sm={3}><CenteredContent>{person.PersonName}</CenteredContent></TableCell>
        <TableCell fluid sm={3}><CenteredContent>{person.Department}</CenteredContent></TableCell>
        <TableCell fluid sm={3}><CenteredContent>{person.JobCategory}</CenteredContent></TableCell>
        <TableCell fluid sm={3}>
            <StyledLink data-vertical-align to={{pathname: '/level-entry', query: { name: 'yourself'}}}>Edit draft</StyledLink>
        </TableCell>
    </TableRow>
);