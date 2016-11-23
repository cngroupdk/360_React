import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import Tabs from '../components/common/tabs'
import TaskList from '../components/TaskList/TaskList';
import HistoryList from '../components/HistoryList/HistoryList';
import { fetchPeople } from '../components/HistoryList/actions';

class HomePage extends Component {
    static propTypes = {
        isLoaded: PropTypes.bool,
        isError: PropTypes.bool,
        fetchPeople: PropTypes.func.isRequired,
        taskPeople: PropTypes.array,
        historyPeople: PropTypes.array,
    }

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData() {
        this.props.fetchPeople();
    }

    render() {
        const {
            isLoaded,
            taskPeople,
            historyPeople,
        } = this.props;

        return (
            <div>
                <Tabs/>
                <Loader loaded={isLoaded}>
                    <TaskList taskPeople={taskPeople}/>
                    <HistoryList historyPeople={historyPeople}/>
                </Loader>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const taskPeople = state.get('taskList');
    const historyPeople = state.get('historyList')

    return {
        historyPeople: historyPeople.get('historyList'),
        taskPeople: taskPeople.get('taskList'),
        isLoaded: taskPeople.get('isLoaded'),
        isError: taskPeople.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchPeople},
)(HomePage);