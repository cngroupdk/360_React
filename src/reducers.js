import { combineReducers } from 'redux-immutable';

import peopleList from './components/PeopleList/reducer';
import historyList from './components/HistoryList/reducer';
import taskList from './components/TaskList/reducer';

const rootReducer = combineReducers({
  peopleList,
  historyList,
  taskList,
});

export default rootReducer;
