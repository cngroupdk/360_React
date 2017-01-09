import React, { Component, PropTypes } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import { selectors } from '../selectors';
import { loaderOptions } from '../appConfig'

import Tabs from '../components/common/Tabs';
import TaskList from '../components/TaskList/TaskList';
import HistoryList from '../components/HistoryList/HistoryList';
import Alert from '../components/common/Alert';

import { fetchHistory } from '../components/HistoryList/HistoryPageActions';
import {
  fetchTasks,
  searchTasks,
  getFirstStep,
} from '../components/TaskList/TaskPageActions';

class TaskAndHistory extends Component {
  static propTypes = {
    tasksIsLoaded: PropTypes.bool,
    historyIsLoaded: PropTypes.bool,
    historyIsError: PropTypes.bool,
    tasksIsisError: PropTypes.bool,
    fetchHistory: PropTypes.func.isRequired,
    fetchTasks: PropTypes.func.isRequired,
    searchTasks: PropTypes.func.isRequired,
    getFirstStep: PropTypes.func.isRequired,
    taskPeople: PropTypes.object,
    historyPeople: PropTypes.object,
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
      tasksIsLoaded,
      historyIsLoaded,
      taskPeople,
      historyPeople,
      searchTasks,
      getFirstStep,
      WhatSubmitted,
    } = this.props;

    return (
      <div>
        <Tabs/>
        {(typeof WhatSubmitted !== 'undefined') ? <Alert WhatSubmitted={WhatSubmitted} />: <div></div>}
        <Loader loaded={tasksIsLoaded && historyIsLoaded} options={loaderOptions}>
          <TaskList
            taskPeople={taskPeople}
            searchTasks={searchTasks}
            getFirstStep={getFirstStep}
          />

          <HistoryList historyPeople={historyPeople}/>
        </Loader>
      </div>
    )
  };
}

function mapStateToProps(state) {
  const { getHistory, historyIsLoaded, historyIsError } = selectors.historyPage;
  const { getTask, tasksIsLoaded, tasksIsError } = selectors.taskPage;
  const { getWhatSubmitted } = selectors.assessmentPage;

  return {
    historyPeople: getHistory(state),
    historyIsLoaded: historyIsLoaded(state),
    historyIsError: historyIsError(state),
    taskPeople: getTask(state),
    tasksIsLoaded: tasksIsLoaded(state),
    tasksIsisError: tasksIsError(state),
    WhatSubmitted: getWhatSubmitted(state),
  };
}

export default connect(
  mapStateToProps,
  {fetchHistory, fetchTasks, searchTasks, getFirstStep},
)(TaskAndHistory);
