import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import getPhotoUrl from '../components/common/getPhotoUrl';

import SkillsList from '../components/QuestionList/SkillsList';

import { ContentContainer } from '../components/common/assets/styles/ContentContainer';
import { ContentHeader } from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { StyledProfilePhoto } from '../components/common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../components/common/assets/styles/StyledProfileInitial';

import {
    fetchAssessment,
    saveAssessment,
    assessmentUpdateAnswer,
    assessmentUpdateSubmitted,
    whoIs,
} from '../components/QuestionList/AssessmentPageActions';

class AssessmentPage extends Component {
    static propTypes = {
        isLoaded: PropTypes.bool,
        isError: PropTypes.bool,
        fetchAssessment: PropTypes.func.isRequired,
        saveAssessment: PropTypes.func.isRequired,
        assessmentUpdateAnswer: PropTypes.func.isRequired,
        assessmentUpdateSubmitted: PropTypes.func.isRequired,
        whoIs: PropTypes.func.isRequired,
        assessment: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this._handleSaveAsDraft = this._handleSaveAsDraft.bind(this);
        this._handleSubmitAssessment = this._handleSubmitAssessment.bind(this);
    }

    componentDidMount() {
        this._fetchAllData();
        window.addEventListener("beforeunload", this._addPromptMessageToWindow);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this._addPromptMessageToWindow);
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

    _fetchAllData() {
        this.props.fetchAssessment(this.props.location.query.id);
        this.props.whoIs(this.props.location.query.id);
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
            person,
        } = this.props;

        return (
            <Loader loaded={isLoaded}>
                <ContentContainer>
                    <ContentHeader>
                        Please, answer questions about {person.Name}
                        &nbsp;
                        <StyledProfileInitial>
                            <StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/>
                        </StyledProfileInitial>
                    </ContentHeader>

                    <SkillsList assessment={assessment} updateAnswer={assessmentUpdateAnswer}/>

                    <StyledLink data-margin-right-30 onClick={this._handleSaveAsDraft} to="/">Save draft</StyledLink>
                    <StyledLink onClick={this._handleSubmitAssessment} to="/">Submit</StyledLink>
                </ContentContainer>
            </Loader>
        )
    }
}

function mapStateToProps(state) {
    const assessmentPageReducerState = state.get('assessmentPageReducer');

    return {
        assessment: assessmentPageReducerState.get('assessment'),
        person: assessmentPageReducerState.get('person'),
        isLoaded: assessmentPageReducerState.get('isLoaded'),
        isError: assessmentPageReducerState.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    { fetchAssessment, saveAssessment, assessmentUpdateAnswer, assessmentUpdateSubmitted, whoIs},
)(AssessmentPage);