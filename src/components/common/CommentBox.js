import React, { Component } from 'react';

import { StyledCommentBox } from './assets/styles/StyledCommentBox.js'

export default class CommentBox extends Component {

  render() {
    const {
      onChange,
      text,
    } = this.props;

    return (
      <StyledCommentBox>
        <textarea
          placeholder='Enter your comment here...'
          onChange={onChange}
          value={text}
        />
      </StyledCommentBox>
    );
  }
}
