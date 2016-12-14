import { combineReducers } from 'redux-immutable';

import peoplePageReducer from './components/PeopleList/PeoplePageReducer';
import historyPageReducer from './components/HistoryList/HistoryPageReducer';
import taskPageReducer from './components/TaskList/TaskPageReducer';
import headerReducer from './components/Header/HeaderReducer';
import reasonPageReducer from './components/ReasonEntry/ReasonPageReducer';
import levelPageReducer from './components/LevelEntry/LevelPageReducer';
import selfPageReducer from './components/SelfList/SelfPageReducer';
import assessmentPageReducer from './components/QuestionList/AssessmentPageReducer';


const rootReducer = combineReducers({
  peoplePageReducer,
  historyPageReducer,
  taskPageReducer,
  headerReducer,
  selfPageReducer,
  reasonPageReducer,
  levelPageReducer,
  assessmentPageReducer,
});

export default rootReducer;
