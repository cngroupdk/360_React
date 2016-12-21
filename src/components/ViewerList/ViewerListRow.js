import React from 'react';
import dateFormat from 'dateformat';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export const ViewerListRow = ({assessment}) => (
  <TableRow>
    <TableCell fluid sm={3}><CenteredContent>{assessment.get('Name')}</CenteredContent></TableCell>
    <TableCell fluid sm={3}><CenteredContent>{assessment.get('Department')}</CenteredContent></TableCell>
    <TableCell fluid sm={3}><CenteredContent>{assessment.get('Position')}</CenteredContent></TableCell>
    <TableCell fluid sm={3}>
      <CenteredContent>
        {assessment.get('LastSubmitted') ? dateFormat(assessment.get('LastSubmitted'), "dd mmmm yyyy") : ''}
      </CenteredContent>
      <StyledLink
        hidden={!assessment.get('ExistingDraft')}
        data-vertical-align
        to={'/questions?personId=' + assessment.get('SubjectId')}>
        Edit draft
      </StyledLink>
    </TableCell>
  </TableRow>
);
