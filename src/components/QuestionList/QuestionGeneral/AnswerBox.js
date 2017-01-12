import React, { Component } from 'react';

import { StyledCommentBox } from '../../common/assets/styles/QuestionsPage/StyledCommentBox.js'

export default class AnswerBox extends Component {
  render() {
    const {
      onChange,
      text,
    } = this.props;

    return (
      <StyledCommentBox margin-top>
                <textarea
                  placeholder='Enter your answer here...'
                  onChange={onChange}
                  value={text}/>
      </StyledCommentBox>
    );
  }
}
