import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledButton } from '../components/common/assets/styles/StyledButton';

import { fetchQuestions } from '../components/LevelEntry/actions';

class LevelEntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {level: ''};
        this.handleProfLevelChange = this.handleProfLevelChange.bind(this);
    }

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData() {
        this.props.fetchQuestions();
    }

    handleProfLevelChange(e) {
        this.setState({
            level: e.target.value
        });
    }

    render() {
        return (
            <ContentContainer>
                <ContentHeader> Please, choose the professional proficiency level </ContentHeader>
                <div className="clear">&nbsp;</div>

                <div>
                    <input type="radio" name="prof-level" value="JUNIOR" onChange={this.handleProfLevelChange}/> Junior
                    <input type="radio" name="prof-level" value="MIDDLE" onChange={this.handleProfLevelChange}/> Middle
                    <input type="radio" name="prof-level" value="SENIOR" onChange={this.handleProfLevelChange}/> Senior
                </div>

                <div className="Level-entry-page-div">
                    <StyledButton xyAlign disabled={this.state.level === '' ? false : true}>
                        <Link className={this.state.level === '' ? 'disabled-link' : ''} to="/questions-entry">Proceed to questions</Link>
                    </StyledButton>
                </div>

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