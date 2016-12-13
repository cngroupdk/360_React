import React, { Component } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import SkillsList from '../components/QuestionList/SkillsList';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';

import {    fetchAssessment,
            saveAssessment,
            assessmentUpdateAnswer,
            assessmentUpdateSubmitted
        } from '../components/QuestionList/actions';

class QuestionsPage extends Component {
    constructor(props) {
        super(props);
        this._handleSaveAsDraft = this._handleSaveAsDraft.bind(this);
        this._handleSubmitAssessment = this._handleSubmitAssessment.bind(this);
    }

    componentDidMount() {
        this.fetchAllData();
        window.addEventListener("beforeunload", this._addPromptMessageToWindow);
        console.log('mount');
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this._addPromptMessageToWindow);
        console.log('unmount');
    }

    _addPromptMessageToWindow(event) {
        if(!event) event = window.event;
        event.preventDefault();
        const message = "Are you sure you want to leave this page? Changes that you made will be lost.";
        if (event) {
            event.returnValue = message;
        }
        return message;
    }

    fetchAllData() {
        this.props.fetchAssessment(this.props.location.query.id);
    }

    _handleSaveAsDraft() {
        this.props.saveAssessment();
    }

    _handleSubmitAssessment() {
        this.props.assessmentUpdateSubmitted(true);
        this.props.saveAssessment();
    }

    render() {
        const {
            assessment,
            assessmentUpdateAnswer,
            isLoaded,
        } = this.props;

        return (
            <Loader loaded={isLoaded}>
                <ContentContainer>

                    <ContentHeader> Please, answer questions </ContentHeader>

                    <SkillsList assessment={assessment} updateAnswer={assessmentUpdateAnswer}/>

                    <StyledLink data-margin-rigth-30 onClick={this._handleSaveAsDraft} to="/">Save draft</StyledLink>
                    <StyledLink onClick={this._handleSubmitAssessment} to="/">Submit</StyledLink>

                </ContentContainer>
            </Loader>
        )
    }
}

function mapStateToProps(state) {
    const assessmentReducer = state.get('assessmentReducer');

    return {
        assessment: assessmentReducer.get('assessment'),
        isLoaded: assessmentReducer.get('isLoaded'),
        isError: assessmentReducer.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchAssessment, saveAssessment, assessmentUpdateAnswer, assessmentUpdateSubmitted},
)(QuestionsPage);