import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import Tabs from '../components/common/Tabs'
import PeopleList from '../components/PeopleList/PeopleList';

import {
  fetchPeople,
  searchPeople,
  getFirstStep,
} from '../components/PeopleList/PeoplePageActions';

class PeoplePage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchPeople: PropTypes.func.isRequired,
    searchPeople: PropTypes.func.isRequired,
    getFirstStep: PropTypes.func.isRequired,
    people: PropTypes.array,
    draftId: PropTypes.string,
  };

  componentDidMount() {
    this._fetchAllData();
  }

  _fetchAllData() {
    this.props.fetchPeople();
  }

  render() {
    const {
      isLoaded,
      people,
      searchPeople,
      getFirstStep,
    } = this.props;

    return (
      <div>
        <Tabs/>
        <Loader loaded={isLoaded}>
          <PeopleList people={people}
                      searchPeople={searchPeople}
                      getFirstStep={getFirstStep}
          />
        </Loader>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const peoplePageReducerState = state.get('peoplePageReducer');

  return {
    people: peoplePageReducerState.get('peopleList'),
    draftId: peoplePageReducerState.get('draftId'),
    isLoaded: peoplePageReducerState.get('isLoaded'),
    isError: peoplePageReducerState.get('isError'),
  };
}

export default connect(
  mapStateToProps,
  {fetchPeople, searchPeople, getFirstStep},
)(PeoplePage);
