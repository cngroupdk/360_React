import React, { Component } from 'react';
import dateFormat from 'dateformat';

import EditDraftRedirectButton from '../common/EditDraftRedirectButton';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export default class ViewerListRow extends Component {

  checkIfDraft = (assessment) => {
    if (assessment.get('ExistingDraft')) {
      return <EditDraftRedirectButton person={assessment}/>
    }

    return (
      <CenteredContent>
        {assessment.get('LastSubmitted') ? dateFormat(assessment.get('LastSubmitted'), "dd mmmm yyyy") : ''}
      </CenteredContent>
    )
  };

  render() {
    const {assessment}  =this.props;

    return (
      <TableRow>
        <TableCell fluid sm={3}><CenteredContent>{assessment.get('Name')}</CenteredContent></TableCell>
        <TableCell fluid sm={3}><CenteredContent>{assessment.get('Department')}</CenteredContent></TableCell>
        <TableCell fluid sm={3}><CenteredContent>{assessment.get('Position')}</CenteredContent></TableCell>
        <TableCell fluid sm={3}>
          {this.checkIfDraft(assessment)}
        </TableCell>
      </TableRow>
    );
  }
};
