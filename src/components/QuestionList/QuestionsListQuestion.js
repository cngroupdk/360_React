import React, { Component }  from 'react';

import Slider from '../common/Slider.js';
import CommentBox  from '../common/CommentBox.js'

import { QuestionContainer } from '../common/assets/styles/QuestionsPage/QuestionContainer';
import { StyledAddCommentBtn } from '../common/assets/styles/QuestionsPage/StyledAddCommentBtn';

export default class QuestionsListQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: false
        };
        this._handleAddComment = this._handleAddComment.bind(this);
    }

    _handleAddComment() {
        this.setState(() => ({
            showComment: !this.state.showComment
        }));
    }

    render() {
        const {
            question
        } = this.props;

        return (
            <QuestionContainer>
                <h4>{question.title}</h4>
                <div className="components-container">
                    <div className="checkbox-container">
                        <input type="checkbox" name="question1" value="false" /><br/>
                        Cannot or dont want to answer
                    </div>
                    <div className="slider-container"><Slider/></div>
                    <div className="add-button-container">
                        <StyledAddCommentBtn onClick={this._handleAddComment} type="button">
                            {this.state.showComment ? '- Remove a comment' : '+ Add a comment'}
                        </StyledAddCommentBtn>
                    </div>
                </div>
                <div className="clear">&nbsp;</div>
                <div className={this.state.showComment ? '' : 'hidden'}>
                    <CommentBox/>
                </div>
            </QuestionContainer>
        );
    }
}