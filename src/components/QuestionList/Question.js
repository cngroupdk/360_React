import React, { Component }  from 'react';

import Slider from '../common/Slider.js';
import CommentBox  from '../common/CommentBox.js'

import { QuestionContainer } from '../common/assets/styles/QuestionsPage/QuestionContainer';
import { StyledAddCommentBtn } from '../common/assets/styles/QuestionsPage/StyledAddCommentBtn';

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: false,
            disableRange: false
        };
        this._handleAddComment = this._handleAddComment.bind(this);
        this._handleOnChangeDontSay = this._handleOnChangeDontSay.bind(this);
        this._handleOnChangeComment = this._handleOnChangeComment.bind(this);
    }

    _handleAddComment() {
        this.setState(() => ({
            showComment: !this.state.showComment
        }));
    }

    _handleOnChangeDontSay(event) {
        this.setState(() => ({
            disableRange: !this.state.disableRange
        }));

        this.props.updateAnswerDontSay(
            {
                'questionId' : this.props.question.get('Id'),
                'questionGroupId': this.props.questionGroupId,
                'dontSay' : event.target.checked
            }
        );
    }

    _handleOnChangeComment(event) {
        const {
            question,
            updateAnswerDontSay,
        } = this.props;
        const answer = question.get('Answer');
        const id = answer.get('Id');

        updateAnswerDontSay({
            id,
            comment: event.target.value
        });
    }

    render() {
        const { question } = this.props;
        const answer = question.get('Answer');

        return (
            <QuestionContainer>
                <h4>{question.Caption}</h4>
                <div className="components-container">
                    <div className="checkbox-container">
                        <input type="checkbox" name={answer.get('Id')} value="false"
                               onChange={this._handleOnChangeDontSay}
                               defaultChecked={answer.get('DontSay')}/><br/>
                        Cannot or dont want to answer
                    </div>
                    <div className="slider-container"><Slider disableRange={this.state.disableRange}/></div>
                    <div className="add-button-container">
                        <StyledAddCommentBtn onClick={this._handleAddComment} type="button">
                            {this.state.showComment ? '- Remove a comment' : '+ Add a comment'}
                        </StyledAddCommentBtn>
                    </div>
                </div>
                <div className="clear">&nbsp;</div>
                <div className={this.state.showComment ? '' : 'hidden'}>
                    <CommentBox onChange={this._handleOnChangeComment}/>
                </div>
            </QuestionContainer>
        );
    }
}