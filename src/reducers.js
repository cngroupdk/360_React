import { combineReducers } from 'redux-immutable';

import peopleList from './components/PeopleList/reducer';
import historyList from './components/HistoryList/reducer';
import taskList from './components/TaskList/reducer';
import self from './components/Header/reducer';
import selfList from './components/SelfList/reducer';
import assessmentReducer from './components/QuestionList/reducer';
import reasonEntry from './components/ReasonEntry/reducer';
import levelEntry from './components/LevelEntry/reducer';

const rootReducer = combineReducers({
  peopleList,
  historyList,
  taskList,
  self,
  selfList,
  levelEntry,
  assessmentReducer,
});

export default rootReducer;
