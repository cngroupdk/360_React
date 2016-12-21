import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import { selectors } from '../selectors';

import LevelEntry from '../components/LevelEntry/LevelEntry';

import {
  fetchLevels,
  sendLevel,
} from '../components/LevelEntry/LevelPageActions';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { AssessmentPeopleProfileHeader } from '../components/common/AssessmentPeopleProfileHeader';

class LevelPage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchLevels: PropTypes.func.isRequired,
    sendLevel: PropTypes.func.isRequired,
    whoIs: PropTypes.func.isRequired,
    levels: PropTypes.array,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.fetchLevels();
    this.props.whoIs(this.props.personId);
  }

  render() {
    const {
      levelsIsLoaded,
      levels,
      location,
      person,
      sendLevel,
      personId,
      levelId,
      getNextStep,
    } = this.props;

    return (
      <ContentContainer>
        <Loader loaded={levelsIsLoaded}>
          <h1>Proficiency Levels</h1>

          <AssessmentPeopleProfileHeader person={person}/>

          <LevelEntry
            levels={levels}
            location={location}
            sendLevel={sendLevel}
            personId={personId}
            levelId={levelId}
            getNextStep={getNextStep}
          />
        </Loader>
      </ContentContainer>
    )
  }
}

function mapStateToProps(state) {
  const {
    getLevels,
    levelsIsLoaded,
    levelsIsError
  } = selectors.levelPage;

  return {
    levels: getLevels(state),
    levelsIsLoaded: levelsIsLoaded(state),
    levelsIsError: levelsIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {fetchLevels, sendLevel},
)(LevelPage);
