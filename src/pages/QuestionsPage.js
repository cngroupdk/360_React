import React, { Component } from 'react';
import { Link } from 'react-router';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import QuestionList from '../components/QuestionList/QuestionsList';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledButton } from '../components/common/assets/styles/StyledButton';

import { fetchQuestions } from '../components/QuestionList/actions';

class QuestionsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {level: '1'};
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

                    <QuestionList questions={questions}/>

                    <StyledButton xyAlign>
                        <Link className={this.state.level === '' ? 'disabled-link' : ''} to="/">Submit questions</Link>
                    </StyledButton>

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