import React, { Component }  from 'react';

import Slider from './Slider.js';
import CommentBox  from './CommentBox.js'

import { QuestionContainer } from '../../common/assets/styles/QuestionsPage/QuestionContainer';
import { StyledAddCommentBtn } from '../../common/assets/styles/QuestionsPage/StyledAddCommentBtn';

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

    this.handleAddRemoveComment = this.handleAddRemoveComment.bind(this);
    this.handleOnChangeDontSay = this.handleOnChangeDontSay.bind(this);
    this.handleOnChangeNote = this.handleOnChangeNote.bind(this);
    this.handleOnChangeAnswerValue = this.handleOnChangeAnswerValue.bind(this);
  }

  handleAddRemoveComment() {
    this.setState(() => ({
      showComment: !this.state.showComment,
      answerNote: '',
    }));
    this.updateAnswerNote('');
  }

  handleOnChangeDontSay(event) {
    const newDontSay = event.target.checked;

    this.setState(() => ({
      disableRange: newDontSay,
    }));

    this.updateAnswer('DontSay', newDontSay);
  }

  handleOnChangeNote(event) {
    const newNote = event.target.value;
    this.updateAnswerNote(newNote);
  }

  updateAnswerNote(newNote) {
    this.setState(() => ({
      answerNote: newNote
    }));

    this.updateAnswer('Note', newNote);
  }

  handleOnChangeAnswerValue(newValue) {
    this.updateAnswer('AnswerValue', newValue);
  }

  updateAnswer(property, newValue) {
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
              onChange={this.handleOnChangeDontSay}
              defaultChecked={answer.get('DontSay')}/><br/>
            Cannot or don't want to answer
          </div>
          <div className="slider-container">
            <Slider
              value={answer.get('AnswerValue')}
              onChange={this.handleOnChangeAnswerValue}
              disableRange={this.state.disableRange}/>
          </div>
          <div className="add-button-container">
            <StyledAddCommentBtn onClick={this.handleAddRemoveComment} type="button">
              {this.state.showComment ? '- Remove a comment' : '+ Add a comment'}
            </StyledAddCommentBtn>
          </div>
        </div>
        <div className="clear">&nbsp;</div>
        <div className={this.state.showComment ? '' : 'hidden'}>
          <CommentBox text={this.state.answerNote} onChange={this.handleOnChangeNote}/>
        </div>
      </QuestionContainer>
    );
  }
}
