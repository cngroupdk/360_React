import * as fromPeoplePageReducer  from './components/PeopleList/PeoplePageReducer';
import * as fromHistoryPageReducer from './components/HistoryList/HistoryPageReducer';
import * as fromTaskPageReducer from './components/TaskList/TaskPageReducer';
import * as fromAppHeaderReducer from './components/AppHeader/AppHeaderReducer';
import * as fromReasonPageReducer from './components/ReasonEntry/ReasonPageReducer';
import * as fromLevelPageReducer from './components/LevelEntry/LevelPageReducer';
import * as fromViewerPageReducer from './components/ViewerList/ViewerPageReducer';
import * as fromAssessmentPageReducer from './components/QuestionList/AssessmentPageReducer';

export const selectors = {
  peoplePage: {
    getPeople: state =>
      fromPeoplePageReducer.getPeople(state.get('peoplePage')),
    peopleIsLoaded: state =>
      fromPeoplePageReducer.peopleIsLoaded(state.get('peoplePage')),
    peopleIsError: state =>
      fromPeoplePageReducer.peopleIsError(state.get('peoplePage')),
  },

  historyPage: {
    getHistory: state =>
      fromHistoryPageReducer.getHistory(state.get('historyPage')),
    historyIsLoaded: state =>
      fromHistoryPageReducer.historyIsLoaded(state.get('historyPage')),
    historyIsError: state =>
      fromHistoryPageReducer.historyIsError(state.get('historyPage')),
  },

  taskPage: {
    getTask: state =>
      fromTaskPageReducer.getTask(state.get('taskPage')),
    tasksIsLoaded: state =>
      fromTaskPageReducer.tasksIsLoaded(state.get('taskPage')),
    tasksIsError: state =>
      fromTaskPageReducer.tasksIsError(state.get('taskPage')),
  },

  appHeader: {
    getViewer: state =>
      fromAppHeaderReducer.getViewer(state.get('appHeader')),
    viewerIsLoaded: state =>
      fromAppHeaderReducer.viewerIsLoaded(state.get('appHeader')),
    viewerIsError: state =>
      fromAppHeaderReducer.viewerIsError(state.get('appHeader')),
  },

  viewerPage: {
    getViewerList: state =>
      fromViewerPageReducer.getViewerList(state.get('viewerPage')),
    viewerListIsLoaded: state =>
      fromViewerPageReducer.viewerListIsLoaded(state.get('viewerPage')),
    viewerListIsError: state =>
      fromViewerPageReducer.viewerListIsError(state.get('viewerPage')),
  },

  reasonPage: {
    getPerson: state =>
      fromReasonPageReducer.getPerson(state.get('reasonPage')),
    getNextStep: state =>
      fromReasonPageReducer.getNextStep(state.get('reasonPage')),
    reasonIsError: state =>
      fromReasonPageReducer.reasonIsError(state.get('reasonPage')),
  },

  levelPage: {
    getLevels: state =>
      fromLevelPageReducer.getLevels(state.get('levelPage')),
    getPerson: state =>
      fromLevelPageReducer.getPerson(state.get('levelPage')),
    getNextStep: state =>
      fromLevelPageReducer.getNextStep(state.get('levelPage')),
    levelsIsLoaded: state =>
      fromLevelPageReducer.levelsIsLoaded(state.get('levelPage')),
    levelsIsError: state =>
      fromLevelPageReducer.levelsIsError(state.get('levelPage')),
  },

  assessmentPage: {
    getAssessment: state =>
      fromAssessmentPageReducer.getAssessment(state.get('assessmentPage')),
    getPerson: state =>
      fromAssessmentPageReducer.getPerson(state.get('assessmentPage')),
    assessmentIsLoaded: state =>
      fromAssessmentPageReducer.assessmentIsLoaded(state.get('assessmentPage')),
    assessmentIsError: state =>
      fromAssessmentPageReducer.assessmentIsError(state.get('assessmentPage')),
  },
};