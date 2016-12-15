import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import LevelEntry from '../components/LevelEntry/LevelEntry';

import getPhotoUrl from '../components/common/getPhotoUrl';
import {
    fetchLevels,
    sendLevel,
    whoIs,
} from '../components/LevelEntry/LevelPageActions';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledProfilePhoto } from '../components/common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../components/common/assets/styles/StyledProfileInitial';


class LevelPage extends Component {
    static propTypes = {
        isLoaded: PropTypes.bool,
        isError: PropTypes.bool,
        fetchLevels: PropTypes.func.isRequired,
        sendLevel: PropTypes.func.isRequired,
        whoIs: PropTypes.func.isRequired,
        nextStep: PropTypes.string,
        levels: PropTypes.array,
    };

    componentDidMount() {
        this._fetchAllData();
    }

    _fetchAllData() {
        this.props.fetchLevels();
        this.props.whoIs(this.props.location.query.id);
    }

    render() {
        const {
            isLoaded,
            levels,
            location,
            person,
            sendLevel,
            nextStep,
        } = this.props;

        return (
            <ContentContainer>
                <Loader loaded={isLoaded}>
                    <ContentHeader>
                        Please, choose the proficiency level for {person.Name}
                        &nbsp;
                        <StyledProfileInitial>
                            <StyledProfilePhoto imgUrl={getPhotoUrl(person.Login)}/>
                        </StyledProfileInitial>
                    </ContentHeader>
                    <LevelEntry
                        levels={levels}
                        location={location}
                        sendLevel={sendLevel}
                        nextStep={nextStep}/>
                </Loader>
            </ContentContainer>
        )
    }
}

function mapStateToProps(state) {
    const levelPageReducerState = state.get('levelPageReducer');

    return {
        levels: levelPageReducerState.get('levels'),
        person: levelPageReducerState.get('person'),
        nextStep: levelPageReducerState.get('nextStep'),
        isLoaded: levelPageReducerState.get('isLoaded'),
        isError: levelPageReducerState.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchLevels, sendLevel, whoIs},
)(LevelPage);