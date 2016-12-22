import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import TaskAndHistory from './pages/TaskAndHistory';
import PeoplePage from './pages/PeoplePage'
import ViewerPage from './pages/ViewerPage'
import ReasonLevelAssessmentPage from './pages/ReasonLevelAssessmentPage/ReasonLevelAssessmentPage'
import NotFoundPage from './pages/NotFoundPage'

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={TaskAndHistory}/>
      <Route path="people" component={PeoplePage}/>
      <Route path="viewer" component={ViewerPage}/>
      <Route path="assessment/:userId" component={ReasonLevelAssessmentPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}
