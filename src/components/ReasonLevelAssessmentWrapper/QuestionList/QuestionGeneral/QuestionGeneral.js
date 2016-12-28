import React, { Component }  from 'react';

import AnswerBox from './AnswerBox'

import { QuestionContainer } from '../../../common/assets/styles/QuestionsPage/QuestionContainer';

export default class Question extends Component {
  constructor(props) {
    super(props);

    const {question} = this.props;

    const answer = question.get('Answer');
    const note = answer.get('Note') ? answer.get('Note') : '';
    this.state = {
      answerNote: note,
    };

    this.handleOnChangeNote = this.handleOnChangeNote.bind(this);
  }

  handleOnChangeNote(event) {
    const newNote = event.target.value;
    this.updateAnswerNote(newNote);
    this.props.checkIfSubmittable()
  }

  updateAnswerNote(newNote) {
    this.setState(() => ({
      answerNote: newNote
    }));

    this.updateAnswer('Note', newNote);
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

    return (
      <QuestionContainer>
        <h4>{question.get('Caption')}</h4>
          <AnswerBox text={this.state.answerNote} onChange={this.handleOnChangeNote}/>
      </QuestionContainer>
    );
  }
}
