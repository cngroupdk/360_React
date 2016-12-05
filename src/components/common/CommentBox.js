import React, { Component } from 'react';

import { StyledCommentBox } from './assets/styles/QuestionsPage/StyledCommentBox.js'

export default class CommentBox extends Component {

    render() {
        return (
            <StyledCommentBox>
                <textarea placeholder='Enter your comment here...'
                          onChange={this.updateComment}>
                </textarea>
            </StyledCommentBox>
        );
    }
}