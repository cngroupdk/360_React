import React from 'react';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export const SelfListEmpty = () => (
    <TableRow>
        <TableCell fluid sm={12}>
            <CenteredContent data-xyAlign>You don't have any self assessment for now</CenteredContent>
        </TableCell>
    </TableRow>
);