import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import TaskAndHistoryPage from './pages/TaskAndHistoryPage';
import PeoplePage from './pages/PeoplePage'
import ViewerPage from './pages/ViewerPage'
import ReasonLevelAssessmentPage from './pages/ReasonLevelAssessmentPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminPage from './pages/AdminPage'

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={TaskAndHistoryPage}/>
      <Route path="people" component={PeoplePage}/>
      <Route path="viewer" component={ViewerPage}/>
      <Route path="assessment/:userId" component={ReasonLevelAssessmentPage}/>
      <Route path="admin" component={AdminPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}
