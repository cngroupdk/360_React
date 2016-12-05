import React, { Component } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import QuestionList from '../components/QuestionList/QuestionsList';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { QuestionsSectionName } from '../components/common/assets/styles/QuestionsPage/QuestionsSectionName';

import { fetchQuestions } from '../components/QuestionList/actions';

class QuestionsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: '1',
        };
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData() {
        this.props.fetchQuestions();
    }

    handleAnswer(e) {
        this.setState({
            level: e.target.value
        });
    }

    render() {
        const {
            questions,
            isLoaded
        } = this.props;

        return (
            <Loader loaded={isLoaded}>
                <ContentContainer>
                    <ContentHeader> Please, answer questions </ContentHeader>
                    <QuestionsSectionName>Communication</QuestionsSectionName>

                    <QuestionList questions={questions}/>

                    <StyledLink data-margin-rigth-30 to="/">Save draft</StyledLink>
                    <StyledLink to="/">Submit</StyledLink>

                </ContentContainer>
            </Loader>
        )
    }
}

function mapStateToProps(state) {
    const questions = state.get('questionsList');

    return {
        questions: questions.get('questionsList'),
        isLoaded: questions.get('isLoaded'),
        isError: questions.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchQuestions},
)(QuestionsPage);