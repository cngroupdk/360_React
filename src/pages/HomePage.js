import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import Tabs from '../components/common/Tabs';
import TaskList from '../components/TaskList/TaskList';
import HistoryList from '../components/HistoryList/HistoryList';
import { fetchHistory } from '../components/HistoryList/actions';
import { fetchTasks, searchTasks, getFirstStep } from '../components/TaskList/actions';

class HomePage extends Component {

    static propTypes = {
        isLoaded: PropTypes.bool,
        isError: PropTypes.bool,
        fetchHistory: PropTypes.func.isRequired,
        fetchTasks: PropTypes.func.isRequired,
        taskPeople: PropTypes.array,
        historyPeople: PropTypes.array,
    };

    componentDidMount() {
        this.fetchAllData();
    };

    fetchAllData() {
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
                    <TaskList taskPeople={taskPeople} searchTasks={searchTasks} getFirstStep={getFirstStep}/>
                    <HistoryList historyPeople={historyPeople}/>
                </Loader>
            </div>
        )
    };
}

function mapStateToProps(state) {
    const taskPeople = state.get('taskList');
    const historyPeople = state.get('historyList');

    return {
        historyPeople: historyPeople.get('historyList'),
        taskPeople: taskPeople.get('taskList'),
        isLoadedTasks: taskPeople.get('isLoaded'),
        isLoadedHistory: historyPeople.get('isLoaded'),
        isError: taskPeople.get('isError'),
    };
}

export default connect(
    mapStateToProps,
    {fetchHistory, fetchTasks, searchTasks, getFirstStep},
)(HomePage);