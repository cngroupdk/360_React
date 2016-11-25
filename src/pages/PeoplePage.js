import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import Tabs from '../components/common/tabs'
import PeopleList from '../components/PeopleList/PeopleList';
import { fetchPeople, searchPeople, checkIfColleague } from '../components/PeopleList/actions';

class PeoplePage extends Component {

    static propTypes = {
        isLoaded: PropTypes.bool,
        isError: PropTypes.bool,
        fetchPeople: PropTypes.func.isRequired,
        checkIfColleague: PropTypes.func.isRequired,
        people: PropTypes.array,
        isColleague: PropTypes.bool,
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
            checkIfColleague,
            isColleague,
        } = this.props;

        return (
            <div>
                <Tabs/>
                <Loader loaded={isLoaded}>
                    <PeopleList people={people}
                                searchPeople={searchPeople}
                                checkIfColleague={checkIfColleague}
                                isColleague={isColleague}
                    />
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
        isColleague: people.get('isColleague'),
    };
}

export default connect(
    mapStateToProps,
    {fetchPeople, searchPeople, checkIfColleague},
)(PeoplePage);