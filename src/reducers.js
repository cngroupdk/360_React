import { combineReducers } from 'redux-immutable';

import peoplePage  from './components/PeopleList/PeoplePageReducer';
import historyPage from './components/HistoryList/HistoryPageReducer';
import taskPage from './components/TaskList/TaskPageReducer';
import appHeader from './components/AppHeader/AppHeaderReducer';
import reasonPage from './components/ReasonEntry/ReasonPageReducer';
import levelPage from './components/LevelEntry/LevelPageReducer';
import viewerPage from './components/ViewerList/ViewerPageReducer';
import assessmentPage from './components/QuestionList/AssessmentPageReducer';
import reasonLevelAssessmentPage from './components/ReasonLevelAssessmentWrapper/ReasonLevelAssessmentPageReducer';
import adminPage from './components/AdminList/AdminPageReducer';
import confirmationModal from './components/Confirmation/ConfirmationModalReducer';

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
  adminPage,
  confirmationModal,
});

export default rootReducer;

