import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import TaskAndHistory from './pages/TaskAndHistory';
import PeoplePage from './pages/PeoplePage'
import SelfPage from './pages/SelfPage'
import LevelPage from './pages/LevelPage'
import ReasonPage from './pages/ReasonPage'
import AssessmentPage from './pages/AssessmentPage'
import NotFoundPage from './pages/NotFoundPage'

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={TaskAndHistory}/>
      <Route path="people" component={PeoplePage}/>
      <Route path="self" component={SelfPage}/>
      <Route path="level" component={LevelPage}/>
      <Route path="reason" component={ReasonPage}/>
      <Route path="questions" component={AssessmentPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}
