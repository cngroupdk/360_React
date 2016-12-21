import { combineReducers } from 'redux-immutable';

import peoplePage  from './components/PeopleList/PeoplePageReducer';
import historyPage from './components/HistoryList/HistoryPageReducer';
import taskPage from './components/TaskList/TaskPageReducer';
import appHeader from './components/AppHeader/AppHeaderReducer';
import reasonPage from './components/ReasonEntry/ReasonPageReducer';
import levelPage from './components/LevelEntry/LevelPageReducer';
import viewerPage from './components/ViewerList/ViewerPageReducer';
import assessmentPage from './components/QuestionList/AssessmentPageReducer';

const rootReducer = combineReducers({
  peoplePage,
  historyPage,
  taskPage,
  appHeader,
  viewerPage,
  reasonPage,
  levelPage,
  assessmentPage,
});

export default rootReducer;

