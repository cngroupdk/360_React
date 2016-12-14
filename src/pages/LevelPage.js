import React, { Component } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import getPhotoUrl from '../components/common/getPhotoUrl';
import LevelEntry from '../components/LevelEntry/LevelEntry';
import { fetchLevels, sendLevel, whoIs } from '../components/LevelEntry/actions';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledProfilePhoto } from '../components/common/assets/styles/StyledProfilePhoto';
import { StyledProfileInitial } from '../components/common/assets/styles/StyledProfileInitial';


class LevelPage extends Component {

    componentDidMount() {
        this._fetchAllData();
    }

    _fetchAllData() {
        this.props.fetchLevels();
        this.props.whoIs(this.props.location.query.id);
    }

    render() {
        const {
            levels,
            isLoaded,
            location,
            sendLevel,
            nextStep,
            person,
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
    const levels = state.get('levelEntry');

    return {
        levels: levels.get('levels'),
        person: levels.get('person'),
        nextStep: levels.get('nextStep'),
        isLoaded: levels.get('isLoaded'),
        isError: levels.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchLevels, sendLevel, whoIs},
)(LevelPage);