import React, { Component }  from 'react';

import Slider from './slider.js';
import CommentBox  from './commentBox.js'

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
                    <CenteredContent>
                        <Slider/>
                    </CenteredContent>
                </TableCell>
                <TableCell  fluid sm={3}>
                    <CenteredContent>
                        <CommentBox/>
                    </CenteredContent>
                </TableCell>
            </TableRow>
        );
    }
}