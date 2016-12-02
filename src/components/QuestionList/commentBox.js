import React, { Component } from 'react';

import { StyledCommentBox } from '../common/assets/styles/QuestionList/StyledCommentBox.js'

export default class CommentBox extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.updateComment = this.updateComment.bind(this);
    }

    updateComment(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <StyledCommentBox>
            <textarea placeholder='Place for a comment'
                      cols='30'
                      rows='2'
                      onChange={this.updateComment}>
            </textarea>
            </StyledCommentBox>
        );
    }
}