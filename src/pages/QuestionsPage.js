import React, { Component } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import QuestionGroups from '../components/QuestionList/QuestionGroups';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';

import { fetchQuestions } from '../components/QuestionList/actions';

class QuestionsPage extends Component {

    constructor(props) {
        super(props);
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData() {
        this.props.fetchQuestions(this.props.location.query.id);
    }

    handleAnswer(e) {
        this.setState({
            level: e.target.value
        });
    }

    render() {
        const {
            allQuestions,
            isLoaded,
        } = this.props;

        return (
            <Loader loaded={isLoaded}>
                <ContentContainer>

                    <ContentHeader> Please, answer questions </ContentHeader>

                    <QuestionGroups allQuestions={allQuestions}/>

                    <StyledLink data-margin-rigth-30 to="/">Save draft</StyledLink>
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
    {fetchQuestions},
)(QuestionsPage);