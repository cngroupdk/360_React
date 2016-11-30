import React from 'react';
import { Link } from 'react-router';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledButton } from '../common/assets/styles/StyledButton';
import {CenteredContent} from '../common/assets/styles/CenteredContent';

export const SelfListRow = ({person}) => (
    <TableRow>
        <TableCell fluid sm={3}><CenteredContent>{person.PersonName}</CenteredContent></TableCell>
        <TableCell fluid sm={3}><CenteredContent>{person.Department}</CenteredContent></TableCell>
        <TableCell fluid sm={3}><CenteredContent>{person.JobCategory}</CenteredContent></TableCell>
        <TableCell fluid sm={3}>
            <StyledButton verticalAlign> <Link to={{pathname: '/level-entry', query: { name: 'yourself'}}}>Edit draft</Link></StyledButton>
        </TableCell>
    </TableRow>
);