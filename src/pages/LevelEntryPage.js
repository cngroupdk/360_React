import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledButton } from '../components/common/assets/styles/StyledButton';

import { fetchQuestions } from '../components/LevelEntry/actions';

class LevelEntryPage extends Component {

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <ContentContainer>
                <ContentHeader> Enter proficiency level </ContentHeader>

                <button>Junior</button>
                <button>Middle</button>
                <button>Senior</button>

                <StyledButton> <Link to="/questions-entry">Proceed to questions</Link></StyledButton>

            </ContentContainer>
        )
    }
}

function mapStateToProps(state) {
    const questions = state.get('peopleList');

    return {
        questions: questions.get('peopleList'),
        isLoaded: questions.get('isLoaded'),
        isError: questions.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchQuestions},
)(LevelEntryPage);