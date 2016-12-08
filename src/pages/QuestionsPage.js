import React, { Component } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import QuestionGroups from '../components/QuestionList/QuestionGroups';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';

import { fetchQuestions, saveAssessment, updateAnswerDontSay, updateAnswerComment } from '../components/QuestionList/actions';

class QuestionsPage extends Component {

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData() {
        this.props.fetchQuestions(this.props.location.query.id);
    }

    render() {
        const {
            allQuestions,
            saveAssessment,
            updateAnswerDontSay,
            updateAnswerComment,
            isLoaded,
        } = this.props;

        return (
            <Loader loaded={isLoaded}>
                <ContentContainer>

                    <ContentHeader> Please, answer questions </ContentHeader>

                    <QuestionGroups allQuestions={allQuestions}
                                    updateAnswerDontSay={updateAnswerDontSay}
                                    updateAnswerComment={updateAnswerComment}/>

                    <StyledLink data-margin-rigth-30 onClick={saveAssessment} to="/">Save draft</StyledLink>
                    <StyledLink to="/">Submit</StyledLink>

                </ContentContainer>
            </Loader>
        )
    }
}

function mapStateToProps(state) {
    const allQuestions = state.get('questionsList');

    return {
        allQuestions: allQuestions.get('questionsList'),
        isLoaded: allQuestions.get('isLoaded'),
        isError: allQuestions.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchQuestions, updateAnswerDontSay, saveAssessment},
)(QuestionsPage);