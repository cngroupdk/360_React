import { combineReducers } from 'redux-immutable';

import peoplePage  from './components/PeopleList/PeoplePageReducer';
import historyPage from './components/HistoryList/HistoryPageReducer';
import taskPage from './components/TaskList/TaskPageReducer';
import appHeader from './components/AppHeader/AppHeaderReducer';
import reasonPage from './components/ReasonLevelAssessmentWrapper/ReasonEntry/ReasonPageReducer';
import levelPage from './components/ReasonLevelAssessmentWrapper/LevelEntry/LevelPageReducer';
import viewerPage from './components/ViewerList/ViewerPageReducer';
import assessmentPage from './components/ReasonLevelAssessmentWrapper/QuestionList/AssessmentPageReducer';
import reasonLevelAssessmentPage from './components/ReasonLevelAssessmentWrapper/ReasonLevelAssessmentPageReducer';

const rootReducer = combineReducers({
  peoplePage,
  historyPage,
  taskPage,
  appHeader,
  viewerPage,
  reasonPage,
  levelPage,
  assessmentPage,
  reasonLevelAssessmentPage,
});

export default rootReducer;

