import React, { Component } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import LevelEntry from '../components/LevelEntry/LevelEntry';
import { fetchLevels, getSecondStep } from '../components/LevelEntry/actions';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';


class LevelPage extends Component {

    componentDidMount() {
        this._fetchAllData();
    }

    _fetchAllData() {
        this.props.fetchLevels();
    }

    render() {
        const {
            levels,
            isLoaded,
            location,
            getSecondStep,
        } = this.props;

        return (
            <ContentContainer>
                <ContentHeader> Please, choose the proficiency level
                    for {this.props.location.query.name}</ContentHeader>
                <Loader loaded={isLoaded}>
                    <LevelEntry levels={levels} location={location} getSecondStep={getSecondStep}/>
                </Loader>

            </ContentContainer>
        )
    }
}

function mapStateToProps(state) {
    const levels = state.get('levelEntry');

    return {
        levels: levels.get('levels'),
        isLoaded: levels.get('isLoaded'),
        isError: levels.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchLevels, getSecondStep},
)(LevelPage);