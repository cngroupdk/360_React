import React from 'react';

import monthRender from '../common/monthRender';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { CenteredContent } from '../common/assets/styles/CenteredContent';


export const HistoryListPerson = ({person}) => (
    <TableRow>
        <TableCell fluid sm={1}>&nbsp;</TableCell>
        <TableCell fluid sm={2.5}><CenteredContent>{person.Name}</CenteredContent></TableCell>
        <TableCell fluid sm={1.5}><CenteredContent>{person.Department}</CenteredContent></TableCell>
        <TableCell fluid sm={2}><CenteredContent>{person.Position}</CenteredContent></TableCell>
        <TableCell fluid sm={2}><CenteredContent>{monthRender(person.AssessmentMonth)}</CenteredContent></TableCell>
        <TableCell fluid sm={2}>&nbsp;</TableCell>
        <TableCell fluid sm={1}>&nbsp;</TableCell>
    </TableRow>
);
