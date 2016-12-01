import React, { Component }  from 'react';

import { TableRow, TableCell } from '../common/assets/styles/PersonRow';
import { CenteredContent } from '../common/assets/styles/CenteredContent';

export default class QuestionsListQuestion extends Component {

    render() {
        const {
            question
        } = this.props;

        return (
            <TableRow>
                <TableCell fluid sm={6}>
                    <CenteredContent>{question.title}</CenteredContent>
                </TableCell>
                <TableCell fluid sm={3}>
                    <CenteredContent>bar</CenteredContent>
                </TableCell>
                <TableCell  fluid sm={3}>
                    <CenteredContent>comment</CenteredContent>
                </TableCell>

            </TableRow>
        );
    }
}

