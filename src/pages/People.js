import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import Tabs from '../components/common/tabs'
import PeopleList from '../components/PeopleList/PeopleList';
import { fetchPeople, searchPeople } from '../components/PeopleList/actions';

class HomePage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchPeople: PropTypes.func.isRequired,
    people: PropTypes.array,
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.props.fetchPeople();
  }

  render() {
    const {
        isLoaded,
        people,
        searchPeople,
    } = this.props;

    return (
        <div>
          <Tabs/>
          <Loader loaded={isLoaded}>
            <PeopleList people={people} searchPeople={searchPeople}/>
          </Loader>
        </div>
    )
  }
}

function mapStateToProps(state) {
  const people = state.get('peopleList');

  return {
    people: people.get('peopleList'),
    isLoaded: people.get('isLoaded'),
    isError: people.get('isError'),
  };
}

export default connect(
    mapStateToProps,
    {fetchPeople, searchPeople},
)(HomePage);