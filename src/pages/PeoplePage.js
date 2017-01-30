import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import { selectors } from '../selectors';
import { loaderOptions } from '../appConfig'

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
    people: PropTypes.object,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.fetchPeople();
  }

  render() {
    const {
      peopleIsLoaded,
      people,
      searchPeople,
      getFirstStep,
    } = this.props;

    return (
      <div>
        <Tabs/>
        <Loader loaded={peopleIsLoaded} options={loaderOptions}>
          <PeopleList
            people={people}
            searchPeople={searchPeople}
            getFirstStep={getFirstStep}
          />
        </Loader>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { getPeople, peopleIsLoaded, peopleIsError } = selectors.peoplePage;

  return {
    people: getPeople(state),
    peopleIsLoaded: peopleIsLoaded(state),
    peopleIsError: peopleIsError(state),
  };
}

export default connect(
  mapStateToProps,
  {fetchPeople, searchPeople, getFirstStep},
)(PeoplePage);
