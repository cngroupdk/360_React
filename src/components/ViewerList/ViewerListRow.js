import React from 'react';
import dateFormat from 'dateformat';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { StyledLink } from '../common/assets/styles/StyledLink';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export const ViewerListRow = ({assessment}) => (
  <TableRow>
    <TableCell fluid sm={3}><CenteredContent>{assessment.Name}</CenteredContent></TableCell>
    <TableCell fluid sm={3}><CenteredContent>{assessment.Department}</CenteredContent></TableCell>
    <TableCell fluid sm={3}><CenteredContent>{assessment.Position}</CenteredContent></TableCell>
    <TableCell fluid sm={3}>
      <CenteredContent>
        {assessment.LastSubmitted ? dateFormat(assessment.LastSubmitted, "dd mmmm yyyy") : ''}
      </CenteredContent>
      <StyledLink
        hidden={!assessment.ExistingDraft}
        data-vertical-align
        to={'/questions?personId=' + assessment.SubjectId}>
        Edit draft
      </StyledLink>
    </TableCell>
  </TableRow>
);
