import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import Tabs from '../components/common/Tabs';
import TaskList from '../components/TaskList/TaskList';
import HistoryList from '../components/HistoryList/HistoryList';

import { fetchHistory } from '../components/HistoryList/HistoryPageActions';
import {
    fetchTasks,
    searchTasks,
    getFirstStep,
} from '../components/TaskList/TaskPageActions';

class HomePage extends Component {
    static propTypes = {
        isLoadedTasks: PropTypes.bool,
        isLoadedHistory: PropTypes.bool,
        isError: PropTypes.bool,
        fetchHistory: PropTypes.func.isRequired,
        fetchTasks: PropTypes.func.isRequired,
        searchTasks: PropTypes.func.isRequired,
        getFirstStep: PropTypes.func.isRequired,
        taskPeople: PropTypes.array,
        historyPeople: PropTypes.array,
    };

    componentDidMount() {
        this._fetchAllData();
    };

    _fetchAllData() {
        this.props.fetchHistory();
        this.props.fetchTasks();
    };

    render() {
        const {
            isLoadedTasks,
            isLoadedHistory,
            taskPeople,
            historyPeople,
            searchTasks,
            getFirstStep,
        } = this.props;

        return (
            <div>
                <Tabs/>
                <Loader loaded={isLoadedTasks && isLoadedHistory}>
                    <TaskList
                        taskPeople={taskPeople}
                        searchTasks={searchTasks}
                        getFirstStep={getFirstStep}/>

                    <HistoryList historyPeople={historyPeople}/>
                </Loader>
            </div>
        )
    };
}

function mapStateToProps(state) {
    const taskPageReducerState = state.get('taskPageReducer');
    const historyPageReducerState = state.get('historyPageReducer');

    return {
        taskPeople: taskPageReducerState.get('taskList'),
        isLoadedTasks: taskPageReducerState.get('isLoaded'),
        isError: taskPageReducerState.get('isError'),
        historyPeople: historyPageReducerState.get('historyList'),
        isLoadedHistory: historyPageReducerState.get('isLoaded'),
    };
}

export default connect(
    mapStateToProps,
    {fetchHistory, fetchTasks, searchTasks, getFirstStep},
)(HomePage);