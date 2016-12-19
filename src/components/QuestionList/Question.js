import React, { Component }  from 'react';

import Slider from '../common/Slider.js';
import CommentBox  from '../common/CommentBox.js'

import { QuestionContainer } from '../common/assets/styles/QuestionsPage/QuestionContainer';
import { StyledAddCommentBtn } from '../common/assets/styles/QuestionsPage/StyledAddCommentBtn';

export default class Question extends Component {
  constructor(props) {
    super(props);

    const {
      question,
    } = this.props;

    const answer = question.get('Answer');
    const note = answer.get('Note') ? answer.get('Note') : '';
    const dontSay = answer.get('DontSay');
    this.state = {
      showComment: note !== '',
      disableRange: dontSay,
      answerNote: note,
    };

    this._handleAddRemoveComment = this._handleAddRemoveComment.bind(this);
    this._handleOnChangeDontSay = this._handleOnChangeDontSay.bind(this);
    this._handleOnChangeNote = this._handleOnChangeNote.bind(this);
    this._handleOnChangeAnswerValue = this._handleOnChangeAnswerValue.bind(this);
  }

  _handleAddRemoveComment() {
    this.setState(() => ({
      showComment: !this.state.showComment,
      answerNote: '',
    }));
    this._updateAnswerNote('');
  }

  _handleOnChangeDontSay(event) {
    const newDontSay = event.target.checked;

    this.setState(() => ({
      disableRange: newDontSay,
    }));

    this._updateAnswer('DontSay', newDontSay);
  }

  _handleOnChangeNote(event) {
    const newNote = event.target.value;
    this._updateAnswerNote(newNote);
  }

  _updateAnswerNote(newNote) {
    this.setState(() => ({
      answerNote: newNote
    }));

    this._updateAnswer('Note', newNote);
  }

  _handleOnChangeAnswerValue(newValue) {
    this._updateAnswer('AnswerValue', newValue);
  }

  _updateAnswer(property, newValue) {
    const {
      question,
      skillId,
      updateAnswer,
    } = this.props;

    updateAnswer(
      {
        'skillId': skillId,
        'questionId': question.get('Id'),
        'answerProperty': property,
        'propertyValue': newValue,
      }
    );
  }

  render() {
    const {question} = this.props;
    const answer = question.get('Answer');

    return (
      <QuestionContainer>
        <h4>{question.get('Caption')}</h4>
        <div className="components-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              name={answer.get('Id')}
              value="false"
              onChange={this._handleOnChangeDontSay}
              defaultChecked={answer.get('DontSay')}/><br/>
            Cannot or dont want to answer
          </div>
          <div className="slider-container">
            <Slider
              value={answer.get('AnswerValue')}
              onChange={this._handleOnChangeAnswerValue}
              disableRange={this.state.disableRange}/>
          </div>
          <div className="add-button-container">
            <StyledAddCommentBtn onClick={this._handleAddRemoveComment} type="button">
              {this.state.showComment ? '- Remove a comment' : '+ Add a comment'}
            </StyledAddCommentBtn>
          </div>
        </div>
        <div className="clear">&nbsp;</div>
        <div className={this.state.showComment ? '' : 'hidden'}>
          <CommentBox text={this.state.answerNote} onChange={this._handleOnChangeNote}/>
        </div>
      </QuestionContainer>
    );
  }
}
